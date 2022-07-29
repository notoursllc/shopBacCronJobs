const { getAxios } = require('../utils.js');

(async function() {

    try {
        const $axios = getAxios();
        const result  = await $axios.post('exchange-rate');
        console.log(result.data);
    }
    catch(err) {
        console.error(err);
    }

})();
