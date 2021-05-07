document.addEventListener('DOMContentLoaded', () => {
    
    let icons = document.querySelectorAll('.icon');
    let cards_clicked = [];
    let pairs_found = 0;
    let max_cards_clicked = 0;

    for(let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', () => {
            switch(icons[i].children[0].getAttribute('alt')) {
                case 'react':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                        icons[i].children[0].setAttribute('src', 'assets/react.png');
                        cards_clicked.push('react');
                        setTimeout(() => {
                            if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                                setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'react') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                                }, 900);     
                            }
                        },900);
                        if(cards_clicked[0] == cards_clicked[1]) {
                            pairs_found += 1;
                            /** Modifier opacity des 2 cartes.. */
                            for(let i = 0; i < icons.length; i++) {
                                if(icons[i].children[0].getAttribute('alt') == 'react') {
                                    icons[i].classList.add('won');
                                }
                            }
                            cards_clicked = [];
                        }
                    }
                    setTimeout(() => {
                        max_cards_clicked = 0;
                    }, 1500);
                break;
                case 'angular':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                    icons[i].children[0].setAttribute('src', 'assets/angular.png');
                    cards_clicked.push('angular');
                    setTimeout(() => {
                        if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                            setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'angular') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                            }, 900);     
                        }
                    }, 900);
                    if(cards_clicked[0] == cards_clicked[1]) {
                        pairs_found += 1;
                        /** Modifier opacity des 2 cartes.. */
                        for(let i = 0; i < icons.length; i++) {
                            if(icons[i].children[0].getAttribute('alt') == 'angular') {
                                icons[i].classList.add('won');
                            }
                        }
                        cards_clicked = [];
                    }
                }
                setTimeout(() => {
                    max_cards_clicked = 0;
                }, 1500);
                break;
                case 'ember':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                    icons[i].children[0].setAttribute('src', 'assets/ember.png');
                    cards_clicked.push('ember');
                    setTimeout(() => {
                        if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                            setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'ember') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                            }, 900);     
                        }
                    }, 900);
                    if(cards_clicked[0] == cards_clicked[1]) {
                        pairs_found += 1;
                        /** Modifier opacity des 2 cartes.. */
                        for(let i = 0; i < icons.length; i++) {
                            if(icons[i].children[0].getAttribute('alt') == 'ember') {
                                icons[i].classList.add('won');
                            }
                        }
                        cards_clicked = [];
                    }
                }
                setTimeout(() => {
                    max_cards_clicked = 0;
                }, 1500);
                break;
                case 'vue':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                    icons[i].children[0].setAttribute('src', 'assets/vue.png');
                    cards_clicked.push('vue');
                    setTimeout(() => {
                        if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                            setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'vue') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                            }, 900);     
                        }
                    }, 900);
                    if(cards_clicked[0] == cards_clicked[1]) {
                        pairs_found += 1;
                        /** Modifier opacity des 2 cartes.. */
                        for(let i = 0; i < icons.length; i++) {
                            if(icons[i].children[0].getAttribute('alt') == 'vue') {
                                icons[i].classList.add('won');
                            }
                        }
                        cards_clicked = [];
                    }
                }
                setTimeout(() => {
                    max_cards_clicked = 0;
                }, 1500);
                break;
                case 'aurelia':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                    icons[i].children[0].setAttribute('src', 'assets/aurelia.png');
                    cards_clicked.push('aurelia');
                    setTimeout(() => {
                        if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                            setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'aurelia') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                            }, 900);     
                        }
                    }, 900);
                    if(cards_clicked[0] == cards_clicked[1]) {
                        pairs_found += 1;
                        /** Modifier opacity des 2 cartes.. */
                        for(let i = 0; i < icons.length; i++) {
                            if(icons[i].children[0].getAttribute('alt') == 'aurelia') {
                                icons[i].classList.add('won');
                            }
                        }
                        cards_clicked = [];
                    }
                }
                setTimeout(() => {
                    max_cards_clicked = 0;
                }, 1500);
                break;
                case 'meteor':
                    max_cards_clicked += 1;
                    if(max_cards_clicked <= 2) {
                    icons[i].children[0].setAttribute('src', 'assets/meteor.png');
                    cards_clicked.push('meteor');
                    setTimeout(() => {
                        if(cards_clicked[0] !== cards_clicked[1] || cards_clicked.length == 1) {
                            setTimeout(() => { 
                                /** Si les 2 cartes sont différentes, on les retourne */
                                for(let i = 0; i < icons.length; i++) {
                                    if(icons[i].children[0].getAttribute('alt') == 'meteor') {
                                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                                    }
                                }
                                cards_clicked = [];
                            }, 900);     
                        }
                    }, 900);
                    if(cards_clicked[0] == cards_clicked[1]) {
                        pairs_found += 1;
                        /** Modifier opacity des 2 cartes.. */
                        for(let i = 0; i < icons.length; i++) {
                            if(icons[i].children[0].getAttribute('alt') == 'meteor') {
                                icons[i].classList.add('won');
                            }
                        }
                        cards_clicked = [];
                    }
                }
                setTimeout(() => {
                    max_cards_clicked = 0;
                }, 1500);
                break;
            }
            /** Jeu terminé */
            if(pairs_found == 6) {
                console.log('jeu terminé !');
                let frame = document.querySelector('.frame');
                for(let i = 0; i < icons.length; i++) {
                    setTimeout(() => {
                        icons[0].classList.add('opacityZero');
                    }, 1000);
                    setTimeout(() => {
                        icons[1].classList.add('opacityZero');
                    }, 1100);
                    setTimeout(() => {
                        icons[2].classList.add('opacityZero');
                    }, 1200);
                    setTimeout(() => {
                        icons[3].classList.add('opacityZero');
                    }, 1300);
                    setTimeout(() => {
                        icons[4].classList.add('opacityZero');
                    }, 1400);
                    setTimeout(() => {
                        icons[5].classList.add('opacityZero');
                    }, 1500);
                    setTimeout(() => {
                        icons[6].classList.add('opacityZero');
                    }, 1600);
                    setTimeout(() => {
                        icons[7].classList.add('opacityZero');
                    }, 1700);
                    setTimeout(() => {
                        icons[8].classList.add('opacityZero');
                    }, 1800);
                    setTimeout(() => {
                        icons[9].classList.add('opacityZero');
                    }, 1900);
                    setTimeout(() => {
                        icons[10].classList.add('opacityZero');
                    }, 2000);
                    setTimeout(() => {
                        icons[11].classList.add('opacityZero');
                    }, 2100);
                }
                setTimeout(() => {
                    for(let i = 0; i < icons.length; i++) {
                        icons[i].children[0].setAttribute('src', 'assets/js.png');
                        icons[i].classList.remove('won');
                        setTimeout(() => {
                            icons[4].classList.remove('opacityZero');
                        }, 1000);
                        setTimeout(() => {
                            icons[6].classList.remove('opacityZero');
                        }, 1200);
                        setTimeout(() => {
                            icons[11].classList.remove('opacityZero');
                        }, 1400);
                        setTimeout(() => {
                            icons[1].classList.remove('opacityZero');
                        }, 1600);
                        setTimeout(() => {
                            icons[7].classList.remove('opacityZero');
                        }, 1800);
                        setTimeout(() => {
                            icons[8].classList.remove('opacityZero');
                        }, 2000);
                        setTimeout(() => {
                            icons[0].classList.remove('opacityZero');
                        }, 2200);
                        setTimeout(() => {
                            icons[2].classList.remove('opacityZero');
                        }, 2400);
                        setTimeout(() => {
                            icons[10].classList.remove('opacityZero');
                        }, 2600);
                        setTimeout(() => {
                            icons[3].classList.remove('opacityZero');
                        }, 2800);
                        setTimeout(() => {
                            icons[9].classList.remove('opacityZero');
                        }, 3000);
                        setTimeout(() => {
                            icons[5].classList.remove('opacityZero');
                        }, 3200);
                    }
                }, 2500);
            }
        });
    }

});