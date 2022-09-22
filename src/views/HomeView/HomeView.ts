// import { Notification } from "@swisscom/sdx";
// import { MessageClickCallback } from "@swisscom/sdx/dist/es6/notification/Notification";
import NavBar from "@/components/NavBar/NavBar.vue";
import CardTile from "@/components/CardTile/CardTile.vue";
import DialogModal from "@/components/DialogModal/DialogModal.vue";

import type { Card } from "@/types/Card";
import ApiService from "@/services/ApiService";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CardTile,
    DialogModal,
  },
  data() {
    return {
      cards: [] as Card[],
      started: false,
      startTime: 0,
      turns: 0,
      timer: 0,
      time: 0,
      score: 0,
      userName: "",
      userNameValid: undefined as boolean | undefined,
      onCoolDown: false,
      timeString: "--:--",
    };
  },
  async created() {
    await this.loadCards();
  },
  methods: {
    async resetGame() {
      this.onCoolDown = true;
      // (this.$refs.modal as HTMLSdxDialogElement).close();

      clearInterval(this.timer);
      this.timeString = "--:--";
      this.turns = 0;
      this.started = false;
      this.startTime = 0;
      this.time = 0;

      await this.loadCards();
      this.userName = "";
      this.userNameValid = undefined;
      this.score = 0;

      setTimeout(() => {
        this.onCoolDown = false;
      }, 500);
    },

    // displayNotificationHeader(
    //   message: string,
    //   modifierClass: "" | "confirmation" | "alert" = "",
    //   containerId = "notification-header-container",
    //   closeAfter = 2000,
    //   callback: MessageClickCallback = () => {
    //     this.$router.push("/scoreboard");
    //     notification.close();
    //     return true;
    //   },
    //   cancelCallback: () => void = () => {
    //     return false;
    //   }
    // ) {
    //   const notification = Notification.showOnHeader(
    //     containerId,
    //     message,
    //     callback,
    //     cancelCallback,
    //     `${modifierClass === "" ? "" : "notification--"}${modifierClass}`
    //   );
    //   setTimeout(() => notification.close(), closeAfter);
    // },

    // ApiService get cards
    async loadCards() {
      const resetCards: Card[] = this.cards.map((cardDTO: any) => ({
        ...cardDTO,
        flipped: false,
        found: false,
      }));

      this.cards = resetCards;
      const data = await ApiService.getCards();

      setTimeout(() => {
        const cards: Card[] = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 8)
          .map((cardDTO) => ({ ...cardDTO, flipped: false, found: false }));
        // Duplicating cards
        cards.push(...JSON.parse(JSON.stringify(cards)));
        // Shuffling cards
        cards.sort(() => 0.5 - Math.random());
        this.cards = cards;
      }, 250);
    },

    addResults(): void {
      if (this.userNameValid && this.userName) {
        ApiService.addScore({
          userName: this.userName,
          score: this.score,
        });
        this.resetGame();
        // this.displayNotificationHeader(
        //   "Score successfully saved!",
        //   "confirmation"
        // );
      }
    },

    flippedCards(): Card[] {
      // create new array of each card that is flipped
      return this.cards.filter((card) => card.flipped);
    },

    sameFlippedCard(): boolean {
      const flippedCards = this.flippedCards();
      return (
        flippedCards.length == 2 && flippedCards[0].id === flippedCards[1].id
      );
    },

    setCardFounds(): void {
      // set found to true foreach flipped card in this.cards
      this.cards = this.cards.map((card) => {
        card.found = card.flipped || card.found;
        return card;
      });
    },

    checkAllFound(): boolean {
      // Check if array length of non found cards is equal to zero
      return this.cards.filter((card) => !card.found).length === 0;
    },

    startGame(): void {
      this.started = true;

      this.timer = setInterval(() => {
        const date = new Date(0);

        date.setSeconds(this.time++);
        let dateString = date.toISOString().substring(14, 19);

        if (dateString === "59:59") {
          clearInterval(this.timer);
          dateString = "∞:∞";
        }

        this.timeString = dateString;
      }, 1000);
    },

    finishGame(): void {
      this.started = false;

      const turns = this.turns;
      this.score = turns;

      // this.score =
      //   1000 -
      //   (this.time - this.startTime - this.cards.length * 5) * 3 -
      //   (this.turns - this.cards.length) * 5;

      // if (this.score < 0) {
      //   this.score = 0;
      // }

      clearInterval(this.timer);
      // (this.$refs.modal as HTMLSdxDialogElement).open();
    },

    setUserName(userName: string) {
      this.userName = userName;
      this.userNameValid = userName.length > 0;
    },

    flipCard(index: number): void {
      const card = this.cards[index];

      // if card is already flipped or found, return
      if (card.found || card.flipped) {
        return;
      }

      if (!this.started) {
        this.startGame();
      }

      const flipCount = this.flippedCards().length;
      switch (flipCount) {
        case 0:
          card.flipped = !card.flipped;
          break;
        case 1: {
          card.flipped = !card.flipped;

          this.turns += 1;

          setTimeout(() => {
            this.clearFlips();
          }, 1000);
          // Cards matched
          if (this.sameFlippedCard()) {
            setTimeout(() => {
              this.setCardFounds();
              if (this.checkAllFound()) {
                this.finishGame();
              }
            }, 500);
            return;
          }
        }
      }
    },

    clearFlips(): void {
      // set each flipped card of array to false
      this.cards = this.cards.map((card) => {
        card.flipped = false;
        return card;
      });
    },
  },
};
