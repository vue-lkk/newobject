<template>
    <div class="swiper-box">
        <div id="scroll-swiper">
        <div class="scroll-swiper-item">
            <slot></slot>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'Swiper',
        props:{
            timeInterval: {
                type:Number,
                default:3000
            },
            animationTime: {
                type:Number,
                default:600 
            },
            moveImg: {
                type:Number,
                default:0.3
            },
            ifScroll: {
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                itemCount:0,
                totalWidth:0,
                swiperStyle:{},
                currentIndex:1
            }
        },
        mounted () {
            ;
        },
        methods: {
            hanleDom() {
                let swiper = document.querySelector('.scroll-swiwper');
                let swipers = document.getElementsByClassName('scroll-swiper-item');

                this.itemCount = swipers.length

                if(this.itemCount > 1) {
                    let clonefirst = itemCount[0].cloneNode(true);
                    let cloneLast = itemCount[this.itemCount - 1].cloneNode(true);

                    swiper.insertBefore(cloneLast,swipers[0]);
                    swiper.appendChild(clonefirst)

                    this.totalWidth = swiper.offsetWidth;
                    this.swiperStyle = swiper.style;
                }
                this.setTranForm(-this.totalWidth); 
            },
            setTranForm(position){
                this.swiperStyle.transform = `translate3d(${position}px,0,0)`
            },
            startTimer() {
                this.playTimer = window.setInterval(() => {
                    this.currentIndex++;
                    this.scrollContent(-this.currentIndex * this.totalWidth);
                },this.timeInterval)
            },
            stopTimer() {
                window.clearInterval(this.playTimer);
            },
            scrollContent(currentPosition) {
                this.ifScroll = !this.ifScroll;
                this.swiperStyle.transition = 'transform' + this.animationTime + 'ms';
                this.setTranForm(currentPosition)
                this.checkPosition();
                this.ifScroll = this.ifScroll;
            },
            checkPosition() {
                window.setTimeout(() => {
                    this.swiperStyle.transition = '0ms';
                    if(this.currentIndex >= this.itemCount + 1) {
                        this.currentIndex = 1;
                        this.setTranForm(-this.currentIndex * this.totalWidth);
                    }else if(this.currentIndex <= 0) {
                        this.currentIndex = this.itemCount
                        this.setTranForm(-this.currentIndex * this.totalWidth)
                    }
                },this.animationTime)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>