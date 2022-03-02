<template>
    <div class="home">
        <Navigation />
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
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://www.oberlo.com/media/1603954246-email-tracker-apps.jpg?fit=max&fm=jpg&w=1824" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import MailPost from '../components/MailPost.vue';
import Navigation from "../components/Navigation.vue"
import photo from '../../../assets/home.jpg'
export default {
  name: "home",
  components: {
      MailPost,
      Navigation
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
