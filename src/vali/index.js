export default{
	install(vue){
		vue.directive('focus', {
		  // 当绑定元素插入到 DOM 中。
		  inserted: function (el) {
		    el.focus()
		  }
	    })
	}
}
var message={
		required:"必填"
	}