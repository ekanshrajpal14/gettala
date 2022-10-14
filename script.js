function show() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
show();






gsap.from("#navbar", {
    // scrollTrigger:{
    //     trigger:"#navbar",
    //     scroller:"#main",
    //     // markers:true,
    //     // start:"top 50%",
    //     // end:"top 20%"

    // },
    opacity: -1,
    // y:-100,
    duration: 2,
    // ease:Expo.easeOut
})
// document.querySelector("#navbar").style.position="fixed"
gsap.from("#head", {
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "#main",
        // markers:true,
        // start:"top 50%",
        // end:"top 20%"

    },
    onStart: function () {
        $('#head').textillate({ in: { effect: 'fadeInUpBig ' } });
    },
    opacity: 0,
    // y:200,
    duration: 0.4,
    // ease:Expo.easeOut
})


gsap.from("#subtext>h5", {
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "#main",
        // markers:true,
        // start:"top 50%",
        // end:"top 20%"

    },
    delay: 1,
    opacity: 0,
    y: 200,
    stagger: 0.3,
    duration: 1,
    // ease:Expo.easeOut
})
gsap.from("#subtext2>h6", {
    scrollTrigger: {
        trigger: "#subtext2>h6",
        scroller: "#main",
        // markers:true,
        // start:"top 50%",
        // end:"top 20%"

    },
    delay: 1,
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1,
    // ease:Expo.easeOut
})
gsap.to("#image1>img", {
    scrollTrigger: {
        trigger: "#image1>img",
        scroller: "#main",
        // markers: true,
        scrub: 5,
        // pin:true,
        start: "top 80%",
        // end:"top 20%"

    },
    // delay: 1,
    // opacity: 0,
    scale: (1),
    // stagger: 0.3,
    duration: 1,
    ease: Expo.easeOut
})


gsap.from("#text1>h2", {
    scrollTrigger: {
        trigger: "#text1>h2",
        scroller: "#main",
        // markers:true,
        // start:"top 50%",
        end: "top 20%",
        scrub: 2

    },

    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1,
    ease: Expo.easeOut
})
gsap.from("#divline", {
    scrollTrigger: {
        trigger: "#divline",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 20%",
        // scrub: 2

    },

    opacity: 0,
    width: 0,
    // stagger: 0.3,
    duration: 1,
    ease: Expo.easeInOut
})
gsap.from("#available", {
    scrollTrigger: {
        trigger: "#available",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2

    },

    opacity: 0,
    // width: 0,
    y: 10,
    stagger: 0.3,
    duration: 1,
    ease: Expo.easeInOut
})
gsap.from(".mango", {
    scrollTrigger: {
        trigger: ".mango",
        scroller: "#main",
        // markers:true,
        start: "top 95%",
        end: "top 70%",
        scrub: 2

    },

    opacity: 0,
    // width: 0,
    y: 80,
    stagger: 2,
    duration: 10,
    ease: "power2.inOut"
})
gsap.from("#text2 h1", {
    scrollTrigger: {
        trigger: "#text2 h1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 30%",
        scrub: 2

    },

    opacity: 0,
    // width: 0,
    y: 80,
    stagger: .5,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from(".divline1,#divline1", {
    scrollTrigger: {
        trigger: "#linecontainer",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },

    opacity: 0,
    width: 0,
    height: 0,
    // y: 80,
    stagger: .5,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#divline2", {
    scrollTrigger: {
        trigger: "#linecontainer",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    delay: 0.4,
    opacity: 0,
    // width: 0,
    height: 0,
    // y: 80,
    stagger: .5,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#txt31 h1", {
    scrollTrigger: {
        trigger: "#txt31 h1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .5,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#txt32 h3", {
    scrollTrigger: {
        trigger: "#txt32 h3",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#txt41 h1 ,#txt42 h2", {
    scrollTrigger: {
        trigger: "#txt41 h1",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#smile", {
    scrollTrigger: {
        trigger: "#smile",
        scroller: "#main",


    },

    rotate: "-360deg",
    repeat: -1,
    duration: 3.5,
    ease: "none"
})
gsap.to("#h1container h1", {
    scrollTrigger: {
        trigger: "#h1container h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top -27%",
        scrub: .5,
    },

    x: "-35vw",

    ease: "none"
})
gsap.from("#h1container1 h1", {
    scrollTrigger: {
        trigger: "#h1container1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top -27%",
        scrub: .5,
    },

    x: "-50vw",

    ease: "none"
})
gsap.to("#h1container2 h1", {
    scrollTrigger: {
        trigger: "#h1container2 h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top -27%",
        scrub: .5,
    },

    x: "-35vw",

    ease: "none"
})
gsap.from("#h1container3 h1", {
    scrollTrigger: {
        trigger: "#h1container3 h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top -27%",
        scrub: .5,
    },

    x: "-50vw",

    ease: "none"
})
gsap.to("#h1container4 h1", {
    scrollTrigger: {
        trigger: "#h1container4 h1",
        scroller: "#main",
        // markers: true,
        start: "top 149%",
        end: "top -27%",
        scrub: .5,
    },

    x: "-35vw",

    ease: "none"
})
gsap.from("#text6 h1", {
    scrollTrigger: {
        trigger: "#text6 h1",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 1

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#text7 h1", {
    scrollTrigger: {
        trigger: "#text7 h1",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 1

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    // stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#text8 h1", {
    scrollTrigger: {
        trigger: "#text8 h1",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 1

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#text9 h1", {
    scrollTrigger: {
        trigger: "#text9 h1",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    // stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#ic21", {
    scrollTrigger: {
        trigger: "#ic21",
        scroller: "#main",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#ic22", {
    scrollTrigger: {
        trigger: "#ic22",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})
gsap.from("#ic23 ", {
    scrollTrigger: {
        trigger: "#ic23",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 40%",
        scrub: 2

    },
    // delay: 0.4,
    opacity: 0,
    // width: 0,
    // height: 0,
    y: 80,
    stagger: .3,
    duration: 1,
    ease: "power2.inOut"
})


var menu = document.querySelector("#menu");
var menu1 = document.querySelector("#line2");

var flag = 0;
menu.addEventListener("click", function (ele) {
    if (flag === 0) {


        document.querySelector("#nav2 h4").style.opacity = 0;
        document.querySelector("#line1").style.transform = "rotate(135deg)";
        document.querySelector("#menu").style.justifyContent = "center";
        document.querySelector("#navbar").style.color = "#302b31";
        document.querySelector("#line1").style.backgroundColor = "#302b31";
        document.querySelector("#line2").style.backgroundColor = "#302b31";
        document.querySelector("#toplayer").style.top = 0;
        document.querySelector("#line2").style.width = "70%";
        document.querySelector("#line1").style.width = "70%";
        document.querySelector("#menu").style.overflow = "hidden"

        document.querySelector("#line2").style.transform = "rotate(-135deg)";
        flag = 1;
    }
    else {
        document.querySelector("#navbar").style.color = "#d5cdc4";
        document.querySelector("#nav2 h4").style.opacity = 1;

        document.querySelector("#menu").style.justifyContent = "space-between";
        document.querySelector("#line1").style.backgroundColor = "#d5cdc4";
        document.querySelector("#line2").style.backgroundColor = "#d5cdc4";
        document.querySelector("#line2").style.transform = "rotate(0deg)";
        document.querySelector("#line1").style.transform = "rotate(0deg)";
        document.querySelector("#toplayer").style.top = "-100vh";
        document.querySelector("#line1").style.width = "100%";
        document.querySelector("#line2").style.width = "80%";
        flag = 0;

    }
})
menu1.addEventListener("click", function (ele) {
    console.log("hey")

})

// document.querySelector("#cross").addEventListener("click",function(){
//     document.querySelector("#toplayer").style.top="-100%";
//     console.log("hey")

// })
var mango = document.querySelector("#variety");
mango.addEventListener("mousemove", elem => {
    document.querySelector("#mover").style.opacity = 1;
    document.querySelector("#mover").style.top = `${elem.y}px`;
    document.querySelector("#mover").style.left = `${elem.x}px`;
    document.querySelector("#mov2").style.top = `${elem.y}px`;
    document.querySelector("#mov2").style.left = `${elem.x}px`;
    document.querySelector("#mov3").style.top = `${elem.y}px`;
    document.querySelector("#mov3").style.left = `${elem.x}px`;

    // document.querySelector("")

});

mango.addEventListener("mouseleave", elem => {
    document.querySelector("#mover").style.opacity = 0;
    document.querySelector("#mover").style.top = `${elem.y}px`;
    document.querySelector("#mover").style.left = `${elem.x}px`;
});

var v1 = document.querySelector("#v1")
var v2 = document.querySelector("#v2")
var v3 = document.querySelector("#v3")
var v4 = document.querySelector("#v4")
var v5 = document.querySelector("#v5")



v1.addEventListener("mouseenter", el => {
    document.querySelector("#mover").style.backgroundColor = "#FBD600";
    document.querySelector("#v1 #arrow").style.opacity = 1;
    document.querySelector(".mp2>h1").style.textShadow = "0  -2px 2px #d5cdc4";
    document.querySelector(".mp2>h1").style.color = "black";
    document.querySelector("#card1 h2").innerHTML = "01";
    document.querySelector("#card2 #one").textContent = "Mango";
    document.querySelector("#card2 #two").textContent = "0.35 OZ (10g)";


})

v2.addEventListener("mouseenter", el => {
    document.querySelector("#mover").style.backgroundColor = "#DAD502";
    document.querySelector("#v2 #arrow").style.opacity = 1;
    document.querySelector("#v2 h1").style.textShadow = "0  -2px 2px #d5cdc4";
    document.querySelector("#v2 h1").style.color = "black";
    document.querySelector("#card1 h2").innerHTML = "02";
    document.querySelector("#card2 #one").textContent = "Banana";
    document.querySelector("#card2 #two").textContent = "0.46 OZ (13g)";


})
v3.addEventListener("mouseenter", el => {
    document.querySelector("#mover").style.backgroundColor = "#7CD9D8";
    document.querySelector("#v3 #arrow").style.opacity = 1;
    document.querySelector("#v3 h1").style.textShadow = "0  -2px 2px #d5cdc4";
    document.querySelector("#v3 h1").style.color = "black";
    document.querySelector("#card1 h2").innerHTML = "03";
    document.querySelector("#card2 #two").textContent = "0.35 OZ (10g)";

    document.querySelector("#card2 #one").textContent = "pineapple";

})
v4.addEventListener("mouseenter", el => {
    document.querySelector("#mover").style.backgroundColor = "#F93984";
    document.querySelector("#card2 #one").textContent = "pitahaya";
    document.querySelector("#v4 #arrow").style.opacity = 1;
    document.querySelector("#v4 h1").style.textShadow = "0  -2px 2px #d5cdc4";
    document.querySelector("#v4 h1").style.color = "black";
    document.querySelector("#card1 h2").innerHTML = "04";
    document.querySelector("#card2 #two").textContent = "0.35 OZ (10g)";

})
v5.addEventListener("mouseenter", el => {
    document.querySelector("#mover").style.backgroundColor = "#FBD600";
    document.querySelector("#v5 #arrow").style.opacity = 1;
    document.querySelector("#v5 h1").style.textShadow = "0  -2px 2px #d5cdc4";
    document.querySelector("#v5 h1").style.color = "black";
    document.querySelector("#card1 h2").innerHTML = "05";
    document.querySelector("#card2 #one").textContent = "mango";
    document.querySelector("#card2 #two").textContent = "0.35 OZ (10g)";
    document.querySelector("#mov2").style.opacity = 1;
    document.querySelector("#mov3").style.opacity = 1;



})

v1.addEventListener("mouseleave", function () {
    document.querySelector("#v1 #arrow").style.opacity = 0;
    document.querySelector(".mp2>h1").style.textShadow = "none";
    document.querySelector(".mp2>h1").style.color = "#d5cdc4";
});
v2.addEventListener("mouseleave", function () {
    document.querySelector("#v2 #arrow").style.opacity = 0;
    document.querySelector("#v2 h1").style.textShadow = "none";
    document.querySelector("#v2 h1").style.color = "#d5cdc4";

});
v3.addEventListener("mouseleave", function () {
    document.querySelector("#v3 #arrow").style.opacity = 0;
    document.querySelector("#v3 h1").style.textShadow = "none";
    document.querySelector("#v3 h1").style.color = "#d5cdc4";

});

v4.addEventListener("mouseleave", function () {
    document.querySelector("#v4 #arrow").style.opacity = 0;
    document.querySelector("#v4 h1").style.textShadow = "none";
    document.querySelector("#v4 h1").style.color = "#d5cdc4";


});
v5.addEventListener("mouseleave", function () {
    document.querySelector("#v5 #arrow").style.opacity = 0;
    document.querySelector("#v5 h1").style.textShadow = "none";
    document.querySelector("#v5 h1").style.color = "#d5cdc4";
    document.querySelector("#mov2").style.opacity = 0;
    document.querySelector("#mov3").style.opacity = 0;

});
var man = document.querySelectorAll(".mango");




// document.querySelector("#page9").addEventListener("wheel", function (elem) {
//     elem.preventDefault();
//     document.querySelector("#h1container").scrollLeft = `${elem.delta}*100`;

//     // document.querySelector("#page9 h1").style.transform=`"translataX(${elem.screenY}vw)"`;
//     console.log(elem.deltaY)
// })
document.querySelector("#txt72").addEventListener("mousemove", ell => {
    document.querySelector("#banana").style.opacity = 1;
    document.querySelector("#banana").style.top = `${ell.y}px`;
    document.querySelector("#banana").style.left = `${ell.x}px`;
    // document.querySelector("#banana").style.transform=` translate(-${ell.screenX*0.05}%,-25%)`
    console.log(ell.x)

    console.log(ell.screenX)

})

document.querySelector("#txt72").addEventListener("mouseleave", el => {
    document.querySelector("#banana").style.opacity = 0;
    // document.querySelector("#banana").style.top = `${ell.y}px`;
    // document.querySelector("#banana").style.left = `${ell.x}px`;

})
document.querySelector("#txt71").addEventListener("mousemove", ell => {
    document.querySelector("#cream").style.opacity = 1;
    document.querySelector("#cream").style.top = `${ell.y}px`;
    document.querySelector("#cream").style.left = `${ell.x}px`;

})

document.querySelector("#txt71").addEventListener("mouseleave", el => {
    document.querySelector("#cream").style.opacity = 0;
    // document.querySelector("#banana").style.top = `${ell.y}px`;
    // document.querySelector("#banana").style.left = `${ell.x}px`;

})



var array = [{
    pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d808794c11d2_258545216_373329417862623_5667998762889005982_n.jpeg"
}, { pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d803bc4c11d8_258164588_405327827908853_5254870529924894724_n.jpeg" }, {
    pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d87b734c11db_258533108_4650341658344955_4386360650422615506_n.jpeg"
}, {
    pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d850a44c11d4_258744419_375101100971664_3362901685866258954_n.jpeg"
}
];
var clutter = "";
array.forEach(function (elem, index) {
    clutter += ` 
                    <img src="${elem.pic}" alt="" id=picc${index}>
                `;
})
document.querySelector("#ic21").innerHTML = clutter;


var array2 = [{
    pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d862534c11d5_257846215_909138396401562_5629436302749554869_n.jpeg"
}, { pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d805e54c11d3_257560439_182062434133114_1286763224034538490_n.jpeg" }, {
    pic: "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d860714c11d6_258128029_219888343480612_5162175675016529746_n.jpeg"
}
];
var clu = "";
array2.forEach(function (elem, index) {
    clu += ` <img src="${elem.pic}" alt="" id=pic21${index}>
    `;
});
document.querySelector("#ic22").innerHTML = clu;


var submit = document.getElementById("submit");

submit.addEventListener("click", elem => {
    elem.preventDefault();
    const valuetakenbyemail = document.querySelector("#emailadd");
    console.log(valuetakenbyemail.value);


    valuetakenbyemail.value = '';
})

document.querySelector("#emailadd").addEventListener('keypress', elemm => {

    if (elemm.key === 'Enter') {
        elemm.preventDefault();
        const valuetakenbyemaill = document.querySelector("#emailadd");
        console.log(valuetakenbyemaill.value);

        valuetakenbyemaill.value = '';
    }
})





// man.forEach(function (elem) {
//     elem.addEventListener("mousemove", dets => {
//         elem.children[1].style.opacity = 1;
//         elem.children[1].style.top = `${dets.y}px`;
//         elem.children[1].style.left = `${dets.x}px`;
//     })
//     elem.addEventListener("mouseleave", function () {
//         elem.children[1].style.opacity = 0;

//     })
// })
