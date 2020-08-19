    let els = document.getElementsByClassName('reveal');
    refreshClasses();
    document.addEventListener('scroll', function (){
        refreshTargets();
    });
    function isElInViewport(el) {
        const rect = el.getBoundingClientRect();
        return ((rect.top <= (window.innerHeight || document.documentElement.clientHeight)) && ((rect.top + rect.height) >= 0) && (rect.left <= (window.innerWidth || document.documentElement.clientWidth)) && ((rect.left + rect.width) >= 0));
    }
    function refreshTargets() {
        els = document.getElementsByClassName('reveal');
        refreshClasses();
    }
    function refreshClasses(){
        Array.prototype.forEach.call(els, function(s){
            let customElementClassNameOptional = s.getAttribute('data-class-reveal');
            let className = !customElementClassNameOptional ? 'revealed' : customElementClassNameOptional;
            if (isElInViewport(s)){
                s.classList.add(className);
            }
            else{
                s.classList.remove(className);
            }
        });
    }
