<template>
  <div class="auto-mx">
    <h1 class="title mb-5">Social</h1>
    <h2 class="mb-5">
      Here are some links. Categories:
      <SimpleLink to="#developer_things">developer things</SimpleLink>,
      <SimpleLink to="#interests">interests</SimpleLink>,
      <span class="whitespace-nowrap">
        <SimpleLink to="#social_media">social media</SimpleLink>,
      </span>
      <span class="whitespace-nowrap">
        <SimpleLink to="#video_games">video games</SimpleLink>.
      </span>
    </h2>
    <SocialSection title="Developer things">
      <SocialLink
        to="https://github.com/realcyguy"
        title="GitHub"
        username="RealCyGuy"
        icon="github"
        prefix="@"
      />
      <SocialLink
        to="https://gitlab.com/realcyguy"
        title="GitLab"
        username="RealCyGuy"
        icon="gitlab"
        prefix="@"
      />
      <SocialLink
        to="https://g.dev/cyrus"
        title="Google Developers"
        username="cyrus"
        icon="googledevelopers"
        prefix="u/"
      />
      <SocialLink
        to="https://stackoverflow.com/users/13683643/cyrus"
        title="Stack Overflow"
        username="Cyrus"
        icon="stackoverflow"
      />
      <SocialLink
        to="https://realcyguy.itch.io"
        title="Itch.io"
        username="realcyguy"
        icon="itchio"
      />
      <SocialLink
        to="https://pypi.org/user/realcyguy"
        title="PyPI"
        username="realcyguy"
        icon="pypi"
      />
      <SocialLink
        to="https://www.npmjs.com/~realcyguy"
        title="npm"
        username="realcyguy"
        icon="npm"
        prefix="~"
      />
      <SocialLink
        to="https://codepen.io/realcyguy"
        title="CodePen"
        username="realcyguy"
        icon="codepen"
        prefix="@"
      />
      <SocialLink
        to="https://marketplace.visualstudio.com/publishers/Cyrus"
        title="Visual Studio Marketplace"
        username="Cyrus"
        icon="vscode"
      />
    </SocialSection>
    <SocialSection title="Interests">
      <SocialLink
        to="https://lichess.org/@/realcyguy"
        title="Lichess"
        username="realcyguy"
        icon="lichess"
        prefix="@"
      />
      <SocialLink
        to="https://www.chess.com/member/realcyguy"
        title="Chess.com"
        username="realcyguy"
        icon="chesscom"
        prefix="@"
      />
      <SocialLink
        to="https://monkeytype.com/profile/realcyguy"
        title="Monkeytype"
        username="realcyguy"
        icon="monkeytype"
      />
      <SocialLink
        to="https://en.wikipedia.org/wiki/User:RealCyGuy"
        title="Wikipedia"
        username="RealCyGuy"
        icon="wikipedia"
        prefix="User:"
      />
      <SocialLink
        to="https://anilist.co/user/realcyguy/"
        title="AniList"
        username="realcyguy"
        icon="anilist"
        prefix="@"
      />
    </SocialSection>
    <SocialSection title="Social media">
      <SocialLink
        to="https://www.youtube.com/@cy_"
        title="Youtube"
        username="cy_"
        icon="youtube"
        prefix="@"
      />
      <SocialLink
        to="https://tiktok.com/@realcyguy"
        title="TikTok"
        username="realcyguy"
        icon="tiktok"
        prefix="@"
      />
      <SocialLink
        to="https://discord.com/users/543225108135673877"
        title="Discord"
        username="realcyguy"
        icon="discord"
        prefix="@"
      />
      <SocialLink
        to="https://www.linkedin.com/in/cyrusyip/"
        title="LinkedIn"
        username="cyrusyip"
        icon="linkedin"
      />
    </SocialSection>
    <SocialSection title="Video games">
      <SocialLink
        to="https://www.speedrun.com/users/RealCyGuy"
        title="Speedrun.com"
        username="RealCyGuy"
        icon="speedruncom"
      />
      <SocialLink
        to="https://steamcommunity.com/id/realcyguy/"
        title="Steam"
        username="realcyguy"
        icon="steam"
      />
      <SocialLink
        to="https://osu.ppy.sh/users/19364518"
        title="osu!"
        username="realcyguy"
        icon="osu"
      />
      <SocialLink
        to="https://tactics.tools/player/na/RealCyGuy/WOW"
        title="Teamfight Tactics"
        username="RealCyGuy#WOW"
        icon="tft"
      />
      <SocialLink
        to="https://enka.network/hsr/603443123/"
        title="Honkai: Star Rail"
        username="603443123"
        icon="hsr"
        :rounded="true"
      />
      <SocialLink
        to="https://brawlify.com/stats/profile/2Y0JG282"
        title="Brawl Stars"
        username="2Y0JG282"
        icon="brawlstars"
        prefix="#"
        :rounded="true"
      />
      <SocialLink
        to="https://tracker.gg/valorant/profile/riot/RealCyGuy%23WOW/overview"
        title="Valorant"
        username="RealCyGuy#WOW"
        icon="valorant"
      />
      <SocialLink
        to="https://enka.network/u/636725875/"
        title="Genshin Impact"
        username="636725875"
        icon="genshinimpact"
        :rounded="true"
      />
      <SocialLink
        to="https://fortnitetracker.com/profile/all/Sync%20Airplane"
        title="Fortnite"
        username="Sync Airplane"
        icon="fortnite"
        :rounded="true"
      />
    </SocialSection>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Social",
});

useSeoMeta({
  description:
    "Links to Cyrus Yip's social media and developer profiles. Includes GitHub, Stack Overflow, and more.",
});

const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  handleAnimation();
  $gsap.to("h3", { opacity: 1, duration: 0.5, delay: 0.5 });
  $ScrollTrigger.batch(".social-link", {
    onEnter: (batch) => {
      $gsap.fromTo(
        batch,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
        },
      );
    },
  });
});
</script>
