<template>
    <section class="animated-content">
        <img src="/img/faction.png" alt="Champion Icon">
        <h1>Featured Regions</h1>
        <ul ref="carousel">
            <li class="next">
                <video muted autoplay loop>
                    <source src="/videos/animated-ionia.webm" type="video/webm" />
                </video>
                <div>
                    <div>
                        <img src="/img/faction.png" alt="Faction Icon">
                    </div>
                    <h2>Ionia</h2>
                    <ul>
                        <li>Region: Runterra</li>
                    </ul>
                    <a href="#">
                        Explore →
                    </a>
                </div>
            </li>
            <li class="active">
                <video muted autoplay loop>
                    <source src="/videos/animated-bilgewater.webm" type="video/webm" />
                </video>
                <div>
                    <div>
                        <img src="/img/faction.png" alt="Faction Icon">
                    </div>
                    <h2>Bilgewater</h2>
                    <ul>
                        <li>Region: Runterra</li>
                    </ul>
                    <a href="#">
                        Explore →
                    </a>
                </div>
            </li>
            <li class="prev">
                <video muted autoplay loop>
                    <source src="/videos/animated-demacia.webm" type="video/webm" />
                </video>
                <div>
                    <div>
                        <img src="/img/faction.png" alt="Faction Icon">
                    </div>
                    <h2>Demacia</h2>
                    <ul>
                        <li>Region: Runterra</li>
                    </ul>
                    <a href="#">
                        Explore →
                    </a>
                </div>
            </li>
        </ul>
        <div>
            <button value="next">→</button>
            <button value="previous">←</button>
        </div>
    </section>
</template>

<script>
export default {
    name:'AnimatedBlock',
     methods:{
        bootCarousels(carousels){
            carousels.forEach(element => {
                        const items = element.parentElement.querySelectorAll("ul > li[class]")
                        const next = element.parentElement.querySelector("ul + * [value=next]")
                        const prev = element.parentElement.querySelector("ul + * [value=previous]")

                        console.log(items)

                        next.addEventListener("click", () => {
                            let classes = []
                            items.forEach(el => {
                                classes.push(el.className)
                            })

                            items[0].className = classes[1]
                            items[1].className = classes[2]
                            items[2].className = classes[0]
                        })

                        prev.addEventListener("click", () => {
                            let classes = []
                            items.forEach(el => {
                                classes.push(el.className)
                            })

                            items[0].className = classes[2]
                            items[1].className = classes[0]
                            items[2].className = classes[1]
                        })

                    });
        }
    },
    mounted(){
        this.bootCarousels([this.$refs.carousel])
    }
}
</script>

<style lang="scss">
    $component: 'animated-content';
    .#{$component}{
        text-align: center;
        color: $color-white;
        position: relative;
        margin-bottom: 20rem;

        h1 {
            position: relative;
            display: inline-block;
            margin-bottom: 3rem;
            color: $color-gold--light;
            font-size: $font-size-mediumX;
            text-transform: uppercase;
            letter-spacing: 7px;
            text-indent: 8px;

            &:after,
            &:before {
                content: "";
                display: block;
                position: absolute;
                height: 2px;
                width: 200px;
                background: $color-gold-gradient--alt;
                top: 50%;
                text-align: right;
            }

            &:after {
                transform: translate(-110%, -50%);
                left: 0;

            }

            &:before {
                transform: translate(110%, -50%) scaleX(-1);
                right: 0;
            }
        }
        img {
            max-height: 1.875rem;
            margin: auto;
            margin-bottom: 1rem;
            display: block;
        }

        >ul {
            position: relative;
            height: 52vh;
            max-height: 580px;
            margin-top: 5rem;

            >li {
                max-width: 900px;
                width: 100%;
                position: absolute;
                transform: translateX(-50%);
                transition: .5s ease all;

                a {
                    text-decoration: none;
                }

                &.prev {
                    left: 20%;
                    z-index: 2;
                    opacity: .5;
                }

                &.active {
                    left: 50%;
                    z-index: 5;

                    p:after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 20%;
                        border-bottom: 2px solid $color-gold;
                        bottom: -50%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }

                &.next {
                    left: 80%;
                    z-index: 2;
                    opacity: .5;
                }


                img {
                    max-width: 100%;
                    display: block;
                    margin: auto;
                }
            }
        }

        >div:not(:nth-child(3)) {
            position: absolute;
            max-width: 940px;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;


            button {
                position: absolute;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                color: $color-gold--light;
                background-color: $color-black;
                appearance: none;
                border: 0;
                transition: .3s ease all;
                font-size: 1.25rem;

                &:hover {
                    font-size: 1.5rem;
                }

                &:after {
                    position: absolute;
                    content: "";
                    top: -5%;
                    left: -5%;
                    display: block;
                    height: 110%;
                    width: 110%;
                    background: $color-gold-gradient;
                    border-radius: 50%;
                    z-index: -1;
                }

                &[value="next"] {
                    right: 0;
                }

                &[value="previous"] {
                    left: 0;
                }

            }
        }
        ul {
        // min-height: 80vh;
        list-style: none;

        >li {
            max-width: 80vw;
            height: 100%;
            // overflow: hidden;

            &.next,
            &.prev,
            &.active {
                left: 50%;
                transform: translateX(-50%);
            }

            &.next,
            &.prev {
                opacity: 1;
            }

            &.next {
                transform: translateX(calc(-150% - 4rem));
            }

            &.prev {
                transform: translateX(calc(50% + 4rem));
            }

            >video+div {
                position: absolute;
                display: flex;
                width: 90%;
                left: 5%;
                bottom: 0;
                padding: 1.5rem;

                background-color: $color-black;
                border: 2px solid $color-gold--dark;

                text-align: center;
                opacity: 1;
                transform: translateY(50%);
                transition: .5s ease opacity;
                transition-delay: .5s;

                &:after {
                    content: "";
                    display: block;
                    border: 1px solid $color-gold--light;
                    position: absolute;
                    height: calc(100% - 3rem);
                    width: calc(100% - 3rem);
                    top: 1.5rem;
                    left: 1.5rem;
                }

                >* {
                    padding: 1rem;
                    color: $color-gold--light;

                    &:not(:last-child) {
                        border-right: 1px solid $color-gold--light;
                    }
                }

                div:first-child {
                    flex-basis: 13%;
                }

                h2 {
                    flex-basis: 39%;
                    text-transform: uppercase;
                    font-size: $font-size-xlarge;
                    letter-spacing: .14em;
                }

                ul {
                    flex-basis: 21%;
                    padding: 0;

                    li {
                        display: block;
                        width: 100%;
                        height: 50%;
                        text-transform: uppercase;
                        letter-spacing: .2em;
                        font-size: $font-size-xsmall;
                        line-height: 4em;

                        &:first-child {
                            border-bottom: 1px solid $color-gold--light;
                        }
                    }
                }

                a {
                    flex-basis: 27%;
                    text-transform: uppercase;
                    font-size: $font-size-medium;
                    color: $color-gold;
                    line-height: 3.25em;
                    cursor: pointer;
                }
            }

            >img {
                opacity: 1;
            }

            video {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-height: 700px;
            }

        }
    }

    >ul+div {
        max-width: calc(100vw - 6rem);
    }
}
</style>