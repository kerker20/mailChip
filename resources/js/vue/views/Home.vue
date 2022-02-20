<template>
    <div class="home">
        <MailPost :post="homeScreen"/>
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Mail Templates</h3>
                <div class="blog-cards"></div>
            </div>
        </div>
        <div class="updates">
            <div class="container">
                <h2>
                    never miss a post. Register for your free account today!
                </h2>
                <router-link class="router-button" to="#">
                    Register for MailChip
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import MailPost from '../components/MailPost.vue';
import photo from '../../../assets/home.jpg'
export default {
  name: "home",
  components: {
      MailPost
  },
  data() {
      return {
          homeScreen: {
              title: "Welcome",
              mailPost: "Weekly mail posts with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
              homeScreen: true,
              photo: photo
            }
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}
.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }
        .router-button {
            display: flex;
            font-size: 14px;
            text-decoration: none;
            @media (min-width: 800px) {
                margin-left: auto;
            }
        }
        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>
