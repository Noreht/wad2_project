<template>
  <div class="grid grid-cols-12 gap-4 min-w-[600px]">
    <div class="col-span-2"></div>
    <div class="col-span-8">
      <!-- ADD THE COMPONENTS AND STYLING HERE -->
      <canvas id="confetti" class="confetti-canvas"></canvas>
      <div>
        <CommunityHeader1 />
      </div>
      <div>
        <suspense>
          <CommunityList @toggle-modal="updateParent" />
        </suspense>
      </div>
      <div class="bg-white">
        <CommunityModal :showing="showModal" @close="showModal = false">
          <h2 class="text-xl font-bold text-black">{{ modalTitle }}</h2>
          <p class="mb-6">{{ modalDesc }}</p>
          <a
            class="bg-amber-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg disabled:bg-gray-300 disabled:text-white"
            href="/communitypage"
          >
            Join Community
          </a>
          <!-- <button
              class="bg-red-400 text-black px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
              @click="showModal = false"
            >
              Close
            </button> -->
        </CommunityModal>
      </div>
    </div>
    <div class="col-span-2"></div>
  </div>
  <Foot />
</template>

<script>
import CommunityList from "@/components/CommunityList.vue";
import CommunityHeader1 from "@/components/CommunityHeader1.vue";
import CommunityModal from "@/components/CommunityModal.vue";
import Foot from "@/components/Footer.vue";

export default {
  name: "CommunitiesView",
  components: { CommunityList, CommunityHeader1, CommunityModal, Foot },
  data() {
    return {
      showModal: false,
      disable: false,
      modalTitle: "",
      modalDesc: "",
    };
  },
  mounted() {
    this.startConfettiAnimation();
  },
  methods: {
    startConfettiAnimation() {
      const canvas = document.getElementById("confetti");
      const context = canvas.getContext("2d");
      const maxConfettis = 300;
      const particles = [];

      const possibleColors = [
        "#ff7336",
        "#f9e038",
        "#02cca4",
        "#383082",
        "#fed3f5",
        "#b1245a",
        "#f2733f",
      ];

      let W = window.innerWidth;
      let H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }

      function confettiParticle() {
        this.x = Math.random() * W;
        this.y = Math.random() * H - H;
        this.r = randomFromTo(11, 33);
        this.d = Math.random() * maxConfettis + 11;
        this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;

        this.draw = function () {
          context.beginPath();
          context.lineWidth = this.r / 2;
          context.strokeStyle = this.color;
          context.moveTo(this.x + this.tilt + this.r / 3, this.y);
          context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
          return context.stroke();
        };
      }

      function Draw() {
        const results = [];

        requestAnimationFrame(Draw);

        context.clearRect(0, 0, W, H);

        for (var i = 0; i < maxConfettis; i++) {
          results.push(particles[i].draw());
        }

        let particle = {};
        let remainingFlakes = 0;
        for (var i = 0; i < maxConfettis; i++) {
          particle = particles[i];

          particle.tiltAngle += particle.tiltAngleIncremental;
          particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
          particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

          if (particle.y <= H) remainingFlakes++;

          if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
          }
        }

        return results;
      }

      window.addEventListener("resize", function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      for (var i = 0; i < maxConfettis; i++) {
        particles.push(new confettiParticle());
      }

      canvas.width = W;
      canvas.height = H;
      Draw();
    },
    updateParent(input) {
      let args = Object.values(input);
      this.modalTitle = args[0];
      this.modalDesc = args[1];
      this.showModal = true;
      this.disable = false;
      this.getJoinedCommunities(this.modalTitle);
    },
  },
};
</script>

<style scoped>
/* Your existing styles */
#confetti {
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  height: 100vh; /* Set height to 100vh for full screen height */
  position: fixed; /* Set position to fixed */
  top: 0;
}

.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Set height to 100vh for full screen height */
  z-index: 999;
  pointer-events: none;
}

.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Set height to 100vh for full screen height */
  overflow: hidden;
  pointer-events: none;
}


.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.confetti {
  position: absolute;
  background-color: #FFD700; /* You can change the confetti color */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.8;
  transform: rotate(45deg);
  pointer-events: none;
  animation: confetti-fall 5s ease-in infinite; /* Extended the animation duration */
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-10vh) rotate(45deg) scale(0.1);
  }
  100% {
    transform: translateY(100vh) rotate(45deg) scale(2);
  }
}
</style>