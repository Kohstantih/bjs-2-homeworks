//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
      const hash = md5(args);
      const objectInCache = cache.find((item) => item[hash]);
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache[hash]);
        return 'Из кэша: ' + objectInCache[hash];
      };

      let result = func(...args);
      cache.push({[hash]: result});
      if (cache.length > maxCacheValuesCount) {
        cache.shift();
      };

      console.log("Вычисляем: " + result);
      return 'Вычисляем: ' + result;
    };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
      
    function wrapper(...args) {
       wrapper.allCount++;
       if (!timeoutId) {
           func(...args);
           wrapper.count++;                
      };
        
      if (timeoutId) {
          clearTimeout(timeoutId);
      };
        
      timeoutId = setTimeout(() => {        
          wrapper.count++;
          return func(...args);
      }, delay);  
    };
    
    return wrapper;
}ж
