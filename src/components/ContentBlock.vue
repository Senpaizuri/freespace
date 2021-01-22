<template>
    <section class="content-block">
        <img src="https://thunderchicken.nl/freespace/img/champion-icon.png" alt="Champion Icon">
        <h1>Latest</h1>
        <div>
            <ul>
                <li>
                    <a href="#">
                        <img src="https://thunderchicken.nl/freespace/img/champion-volibear-splash.jpg" alt="Volibear">
                        <div>
                            <span>the Relentless Storm</span>
                            <h2>Volibear</h2>
                            <span>
                                explore →
                            </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://thunderchicken.nl/freespace/img/champion-ahri-splash.jpg" alt="ahri">
                        <div>
                            <span>the Nine-Tailed Fox</span>
                            <h2>ahri</h2>
                            <span>
                                explore →
                            </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://thunderchicken.nl/freespace/img/champion-bard-splash.jpg" alt="bard">
                        <div>
                            <span>the Wandering Caretaker</span>
                            <h2>bard</h2>
                            <span>
                                explore →
                            </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://thunderchicken.nl/freespace/img/champion-jhin-splash.jpg" alt="jhin">
                        <div>
                            <span>the Virtuoso</span>
                            <h2>jhin</h2>
                            <span>
                                explore →
                            </span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="https://thunderchicken.nl/freespace/img/champion-pantheon-splash.jpg" alt="pantheon">
                        <div>
                            <span>The Unbreakable Spear</span>
                            <h2>pantheon</h2>
                            <span>
                                explore →
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name:"ContentBlock"
}
</script>

<style lang="scss">
    $component: "content-block";
    .#{$component}{
        padding: 0;
        max-width: 1280px;
        margin: auto;
        margin-bottom: 6rem;
        margin-top: 15rem;
        text-align: center;

        >h1 {
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

        >img {
            max-height: 1.875rem;
            margin: auto;
            margin-bottom: 1rem;
            display: block;
        }

        h1+div {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
                "item1 item2 feature feature"
                "item3 item4 feature feature";
            column-gap: .5rem;
            row-gap: .5rem;
            justify-items: stretch;
            list-style: none;

            li {
                width: 100%;
                position: relative;
                overflow: hidden;
                min-height: 340px;
                border: 1px solid $color-gold--dark;
                transition: .3s ease all;

                &:hover {
                    border-color: $color-gold;
                    transform: scale(1.1);
                    z-index: 10;

                    img {
                        transform: translate(-50%, -50%) scale(1.1);
                    }

                    div {
                        transform: translateY(-75%);
                    }
                }

                &:nth-child(1) {
                    grid-area: item1;
                }

                &:nth-child(2) {
                    grid-area: item2;
                }

                &:nth-child(3) {
                    grid-area: item3;
                }

                &:nth-child(4) {
                    grid-area: item4;
                }

                &:nth-child(5) {
                    grid-area: feature;
                }

                a {
                    text-decoration: none;

                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        height: 100%;
                        z-index: -1;
                        transition: .5s ease all;
                    }

                    div {
                        background-color: $color-black--light;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 1.5rem 0;
                        padding-top: 2rem;
                        border-top: 1px solid $color-gold;
                        transition: .5s ease all;

                        &:before,
                        &:after {
                            content: "";
                            display: block;
                            position: absolute;
                            border-radius: 50%;
                            top: 0;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }

                        &:before {
                            height: 2.5rem;
                            width: 2.5rem;
                            background-color: $color-black--light;
                            background-image: url('https://thunderchicken.nl/freespacehttps://thunderchicken.nl/freespace/img/champion.png');
                            background-size: 1rem;
                            background-position: center;
                            background-repeat: no-repeat;
                            z-index: 5;
                        }

                        &:after {
                            height: calc(2.5rem + 2px);
                            width: calc(2.5rem + 2px);
                            background: $color-gold-gradient;
                            z-index: 2;
                        }

                        span,
                        h2 {
                            font-size: $font-size-small;
                            letter-spacing: .14em;
                            text-transform: uppercase;
                            display: block;
                        }

                        span {
                            font-family: $font-spiegel;
                            color: $color-gold;

                            &:last-child {
                                position: absolute;
                                width: 100%;
                                height: 76%;
                                bottom: 0;
                                line-height: 5em;
                                font-family: $font-beaufort;
                                background-color: $color-black--lighter;
                                border-top: 1px solid $color-gold;
                                transform: translateY(100%);
                            }
                        }

                        h2 {
                            color: $color-gold--light;
                        }

                    }
                }

            }
        }
    }
    }
</style>