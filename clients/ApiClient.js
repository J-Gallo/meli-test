"use strict";

const Q = require("q"),
  restler = require('restler'),
  NodeCache = require("node-cache");

class RestConnector {
  constructor(defaultTimeout) {
    this._defaultTimeout = defaultTimeout;
    this._cache = new NodeCache();
  }

  get(url, options) {
    if (options && options.cache) {
      return this._getWithCache(url, options);
    } else {
      return this._getWithoutCache(url, options);
    }
  }


  _getWithoutCache(url, options) {
    let deferred = Q.defer();
    restler .get(url, options)
            .on('success', (rs) => deferred.resolve(rs))
            .on('fail', (err, response) => {
              deferred.reject({err: err, response: response})
            })
            .on('error', (err) => deferred.reject(err))
            .on('timeout', (err) =>  deferred.reject(err));

    return deferred.promise;
  }

  _getWithCache(url, options) {
    let deferred = Q.defer();
    let cacheKey = this._getCacheKey(url);

    this._cache.get(cacheKey, (err, cachedResponse) => {
      if(cachedResponse) {
        deferred.resolve(cachedResponse)

      } else {
        this._getWithoutCache(url, options)
        .then((rs) => {
          this._cache.set(cacheKey, rs, options.cache.ttl);
          deferred.resolve(rs);
        })
        .catch((err) => {
          deferred.reject(err);
        });
      }
    });
    
    return deferred.promise;
  }

  _getCacheKey(url){
    return url;
  }
  
}

module.exports = RestConnector;