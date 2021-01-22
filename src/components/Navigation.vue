<template>
    <nav class="nav">
        <img class="nav__logo" src="/img/logo.svg" alt="Logo">
        <span>universe</span>
        <ul>
            <li><a href="#">champions</a></li>
            <li><a href="#">regions</a></li>
            <li><a href="#">comics</a></li>
            <li>
                <span>alt universe <span>▼</span></span>
                <ul>
                    <li><a href="#">star guardian</a></li>
                    <li><a href="#">odyssey</a></li>
                    <li><a href="#">K/DA</a></li>
                </ul>
            </li>
            <li><a href="#">map</a></li>
            <li><a href="#">explore</a></li>
            <li><a href="#">search</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Navigation'
}
</script>

<style lang="scss">
    $component: "nav";
    .#{$component}{
        background: $color-black;
        height: 5rem;
        display: flex;
        padding: 0 3.5rem;

        &__logo{
            max-width: 2rem;
        }

        a {
            text-decoration: none;
        }

        a,
        span {
            color: $color-white;
            font-family: $font-spiegel;
            text-transform: uppercase;
            letter-spacing: .1rem;
            font-size: $font-size-xsmall;
        }

        >span {
            line-height: 5rem;
            font-size: $font-size-medium;
            padding: 0 .5rem;
            margin: 0 0.85em;

        }

        >ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;

            >li {
                position: relative;
                height: 100%;
                border-bottom: 2px solid transparent;
                transition: .3s ease border-color;
                align-self: center;

                &:hover,
                &:focus {
                    border-color: $color-blue;
                }

                >a,
                >span {
                    display: block;
                    padding: .1rem .75rem;
                    height: 100%;
                    line-height: 4.75rem;
                }

                &:hover ul {
                    display: block;
                }

                ul {
                    display: none;
                    position: absolute;
                    top: calc(100% + 2px);
                    left: 0;
                    background-color: $color-black;
                    min-width: 200px;
                    z-index: 10;

                    li {
                        display: block;

                        &:hover {
                            background-color: rgba($color-grey, .25);
                        }

                        a {
                            padding: .25rem 2rem;
                            line-height: 2.75rem;
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>