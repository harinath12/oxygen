hmapp.factory('ApiService', function (httpService, $q, APIURL, $rootScope) {
	var apiService = {};
    
    apiService.notification = function(msg, type){
        $.toast({
            heading: type,
            text: msg,
            showHideTransition: 'plain',
            icon: type.toLowerCase(),
            position: 'top-right'
        });
    };

    apiService.upload = function(data){
        return httpService
        .post(APIURL+'hm_upload', data)
        .then(function (res) {
            return res['data'];
        });
    };
    
	apiService.login = function (data) {
	    return httpService
        .post(APIURL+'hm_login', data)
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.forgotPassword = function (data) {
        return httpService
        .post(APIURL+'hm_forgot_password', data)
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.resetPassword = function (data) {
        return httpService
        .post(APIURL+'hw_reset_password', data)
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.pages = function(data){
        return httpService.post(APIURL+'hm_getpage&id='+data, {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.hm_blogs = function(){
        return httpService.get(APIURL+'hm_blogs')
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_get_blog = function(id){
        return httpService.get(APIURL+'hm_get_blog&id='+id)
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.blogs = function(data){
        return httpService.post(APIURL+'hm_getblog', {})
        .then(function (res) {
            return res['data'];
        });
    };


    apiService.videos = function(data){
        return httpService.post(APIURL+'hm_getvideos', {})
        .then(function (res) {
            return res['data'];
        });
    };


    apiService.testimonials = function(data){
        return httpService.post(APIURL+'hm_gettestimonials', {})
        .then(function (res) {
            return res['data'];
        });
    };


    apiService.category = function(data){
        return httpService.post(APIURL+'hm_getcategory', {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.prodcuts = function(data){
        return httpService.post(APIURL+'hm_getproducts', {})
        .then(function (res) {
            return res['data'];
        });
    };

    apiService.stores = function(data){
        return httpService.post(APIURL+'hm_getstores', {})
        .then(function (res) {
            return res['data'];
        });
    };
    

    apiService.hm_save_blog = function(data){
        return httpService.post(APIURL+'hm_save_blog', data)
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_delete_blog = function(id){
        return httpService.post(APIURL+'hm_delete_blog', {delete:[id]})
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_change_blog_status = function(st, id){
        return httpService.post(APIURL+'hm_change_blog_status', {status: st, id:id})
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_testimonials = function(){
        return httpService.get(APIURL+'hm_testimonials')
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_get_testimonial = function(id){
        return httpService.get(APIURL+'hm_get_testimonial&id='+id)
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_save_testimonial = function(data){
        return httpService.post(APIURL+'hm_save_testimonial', data)
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_delete_testimonial = function(id){
        return httpService.post(APIURL+'hm_delete_testimonial', {delete:[id]})
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_change_testimonial_status = function(st, id){
        return httpService.post(APIURL+'hm_change_testimonial_status', {status: st, id:id})
        .then(function (res) {
            return res['data'];
        });
    }
    

    
    apiService.hm_category = function(){
        return httpService.get(APIURL+'hm_category')
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_save_category = function(data){
        return httpService.post(APIURL+'hm_save_category', data)
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_delete_category = function(id){
        return httpService.post(APIURL+'hm_delete_category', {delete:[id]})
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.hm_change_category_status = function(st, id){
        return httpService.post(APIURL+'hm_change_category_status', {status: st, id:id})
        .then(function (res) {
            return res['data'];
        });
    }

    apiService.getCategoryAndProducts = function(){
        return httpService.get(APIURL+'hm_get_category_and_products')
        .then(function (res) {
            return res['data'];
        });
    }
    
    return apiService;
});