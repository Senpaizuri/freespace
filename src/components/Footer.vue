<template>
    <footer class="footer">
        <ul>
            <li>
                <a href="#">About league of legends</a>
            </li>
            <li>
                <a href="#">prepaid cards</a>
            </li>
            <li>
                <a href="#">help us improve</a>
            </li>
            <li>
                <a href="#">service status</a>
            </li>
            <li>
                <a href="#">support</a>
            </li>
            <li>
                <a href="#">esports pro site</a>
            </li>
        </ul>
        <img src="https://thunderchicken.nl/freespace/img/riot logo.svg" alt="Riot Logo">
        <p>© 2020 Riot Games, Inc. All rights reserved. Riot Games, League of Legends and PvP.net are trademarks,
            services
            marks, or registered trademarks of Riot Games, Inc.</p>
        <ul>
            <li>
                <a href="#">Privacy Notice</a>
            </li>
            <li>
                <a href="#">Terms of Service</a>
            </li>
        </ul>
        <div>
            <img src="https://thunderchicken.nl/freespace/img/na-esrb.png" alt="ESRB Rating">
            <ul>
                <li>Blood</li>
                <li>Fantasy Violence</li>
                <li>Mild Suggestive Themes</li>
                <li>Use of Alcohol and Tobacco</li>
                <li>Online Interactions Not Rated by the ESRB</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    $component: 'footer';
    
    .#{$component}{
        padding: 2rem 0;
        font-family: $font-spiegel;
        background-color: $color-black;
        color: $color-grey--dark;
        border-top: 2px solid rgba(51, 51, 51, 0.25);

        p {
            color: $color-white;
            text-align: center;
            font-weight: lighter;
            font-size: $font-size-xsmall;
            max-width: 30rem;
            margin: 1rem auto;
            margin-top: 3rem;
            color: inherit;
            line-height: 1.5;
        }

        ul+img {
            margin: 2rem auto;
            display: block;
        }

        ul {
            max-width: 1280px;
            margin: auto;
            list-style: none;

            &:first-child {
                display: flex;
                justify-content: center;

                a {
                    margin: 1rem;
                    text-transform: uppercase;
                    text-decoration: none;
                    font-size: $font-size-small;
                    letter-spacing: .07em;
                    color: $color-white;                
                }
            }

        }

        p+ul {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;

            li {
                margin: .75rem;

                a {
                    font-size: $font-size-small;
                    color: $color-white
                }
            }
        }

        div {
            display: flex;
            color: $color-white;
            justify-content: center;

            img,
            ul {
                margin: 1rem .25rem;
                line-height: 1.25;
            }
        }
    }
</style>