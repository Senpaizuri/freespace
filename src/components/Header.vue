<template>
    <header class="header">
        <ul ref="carousel">
            <li class="prev">
                <img src="https://thunderchicken.nl/freespace/img/story-harmonies.jpg" alt="Harmonies Story">
                <router-link :to="`/detail`">
                    <div>
                        <img src="https://thunderchicken.nl/freespacedata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/pJREFUeNqklntIFEEcx3du9857ppak2JGkdcT1NDJ6wEWl2MuKswcVlYWUVmJkkL3Qoqso7aERHURUf2QF0dmDIrQyCisqgqILsY4Mooee2Vu92Wn2utO9vZm9vRrYu5nd2fns9/eaAUxvA0xoo42BwvnSho6XZScMHhhfrVKB6UoWAf8JR8KP62juZL2WOwMAk8Tz6CJQCAUKnhHb+JHJ7I6CSds5DmzGQxVCzPvmlvax4B/UgQhW6WnVWzPNqebYM9i0EwK34NfvXVmLNl2+BxSqiRpecyAnx6hXO7Fp44L3urphmb24dl9wMogCGsnHTG6WRbtkpnWvmgNrxPd5nqkvPdyQ88rjhcKYUxi5QInqqtKpFnOiSQigERCi3uhCzAf3m7aVGMoH5iPhRyUB06CyZj7tmLHMoFNX4L5BIob/8u337Pyym7eDES4FRwv191fMGWbMnphSxbGqhaQA6/ZBx9It1x0BaBhYKTRkzsFNtvSkfgZsWjCIBIU8urvL+WB209t2nxTMyQQWoI1NBg2oLLEV4YKwk0dILTgxrGogptXtaVuFoZD0UcJCrBxEOi6cPzIhY0SSk1WBbLnyiP06r3h/Q51YpVg1CES2Iuj2/HFpg8yx1/DALFetunywomD3rXIpTDzmCBFNhNrGJOtSkow1CPJmJAPFdfjBkbPPdkfYMHrUkup1yEfYp6Tl4UWtvR9P3A28L19789wer48JnxiinpX4mBrJNxpbngxP7evSaTmjUCAQjh7p1fG9c7nj5OOnBBgxuDQU85LSyD/etTpjenys9hTu63rzla/aeOj+NppPSXmsoSleM886ICXZNEMFGP2PX/BF5dlnd3/+9vlfLs8fOzOuT0xNwK+NJ2pfzXrp8XZRgMSojiGpdRRmFGo13B7cV4sC59Fjd+vi83XNrcIC+4vGu/AynY3PP+ZfavB8VQIM9oPgEKU78tIz+xg1tZRqVF967JFdeHlxZlpCTd3rz+KTBsW80mchG0SPD3Vadi3E+xjpwu9NW2e3DvHvuZGhYUcgcckk5WI64ulpY9KzFvzXRIFSU0j8XFqrmYK5Q1N5iPrLJX+3j/lJW1BGdcjcMMV9TZoFvN+k1OZretfxhACVAxIV9zTbqEQ9q2JWQ0gH4+C6fuV+S3sUZo7s4wnWfqVYbaKMWtjW0emQgUZSzEjzGBTnDs3SxbAuSqQHdh2+/OAFdwXFfNTUIZnaD14/12LTa/1QPdWxEDmdV5tLfvytXP8F9YM32C0l+Ly0V1yhJO1jZze/pdrVdF5mMRThXpiP2dFpcQDXYuF4YsA7jAlfHL4+4Vx+iA9qlc89HUXn7rQ8lUkbJlqo8PNHgAEA1jr8CfAaM94AAAAASUVORK5CYII="
                            alt="content type">
                        <span>By Maikel Sleebos</span>
                        <h1>Harmonies</h1>
                        <p>Since their 2018 debut, pop music supergroup K/DA has been busy.</p>
                    </div>
                </router-link>
            </li>
            <li class="active">
                <img src="https://thunderchicken.nl/freespace/img/udyr.jpg" alt="Udyr Story">
                <router-link :to="`/detail`">
                    <div>
                        <img src="https://thunderchicken.nl/freespacedata:image/png;base64,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"
                            alt="content type">
                        <span>By Michael Luo</span>
                        <h1>A Walk with the Voices</h1>
                        <p>Far above, Udyr heard the cries of an eagle riding the gale.</p>
                    </div>
                </router-link>
            </li>
            <li class="next">
                <img src="https://thunderchicken.nl/freespace/img/seraphine.jpg" alt="Seraphine">
                <router-link :to="`/detail`">
                    <div>
                        <img src="https://thunderchicken.nl/freespace/img/champion.png" alt="content type">
                        <span>the Starry-Eyed Songstress</span>
                        <h1>Seraphine</h1>
                        <p>Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings
                            to her, and
                            she sings back.</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <div>
            <button value="next">→</button>
            <button value="previous">←</button>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    components:{
    },
    computed:{
    },
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

    $component: "header";

    .#{$component}{
        text-align: center;
        color: $color-white;
        position: relative;

        >ul {
            position: relative;
            height: 52vh;
            max-height: 580px;
            list-style-type: none;

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
        li.next,
        li.prev {
            >img {
                filter: grayscale(1);
            }
        }

        >ul {
            li {
                div {
                    position: relative;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 1rem 0;
                    width: 50%;
                    min-width: 200px;
                    min-height: 13rem;
                    border-color: $color-black--lighter;
                    background-color: $color-black--lighter;
                    transition: .3s ease all;
                    transform: translateY(-30px);

                    &:hover {
                        background-color: $color-black--light;
                        border-color: $color-black--light;
                    }

                    &:before,
                    &:after {
                        position: absolute;
                        content: "";
                        display: block;
                        border-left: 225px solid transparent !important;
                        border-right: 225px solid transparent !important;
                        width: 100%;
                    }

                    &:before {
                        top: 0;
                        transform: translateY(-100%);
                        border-bottom: 20px solid transparent;
                        border-color: inherit;
                    }

                    &:after {
                        bottom: 0;
                        transform: translateY(100%);
                        border-top: 20px solid transparent;
                        border-color: inherit;
                    }

                    h1,
                    span,
                    p {
                        max-width: 20rem;
                        margin: 0 auto;
                    }

                    h1 {
                        color: $color-gold;
                        text-transform: uppercase;
                        font-size: $font-size-large;
                        letter-spacing: 3px;
                        margin-bottom: .75rem;
                    }

                    span,
                    p {
                        color: $color-gold--light;
                    }

                    span {
                        text-transform: uppercase;
                        letter-spacing: 4px;
                    }

                    p {
                        position: relative;
                        font-size: $font-size-small;
                    }

                    img {
                        max-height: 1.875rem;
                        margin: 1rem auto;
                        margin-top: 0;
                    }
                }
            }
        }
    }

</style>