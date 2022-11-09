<template>
  <div id="portal">
    <div
      :class="[
        { 'r-fade-transition-enter-done': modalOpen },
        { 'r-fade-transition-exit-done': !modalOpen },
      ]"
      data-core-fade-transition-wrapper=""
      class="rc-overlay rc-overlay-popup rc-overlay-fixed-width"
      data-core-overlay=""
      data-core-overlay-cover=""
    >
      <div data-core-overlay-content="">
        <div class="rc-overlay-popup-outer">
          <div class="rc-overlay-popup-content">
            <div class="rc-overlay-loader-content">
              <div class="dd-modal">
                <h2
                  class="t-headline-reduced"
                  id="b79c0e00-5c20-11ed-933b-e7a7f9dc27fe"
                >
                  {{ data.title }}
                </h2>
                <p class="t-body">{{ data.description }} {{ score }}</p>

                <div class="case-lookup-container">
                  <form
                    v-on:submit.prevent="
                      $emit('submitResults', userName);
                      toggleModal();
                    "
                    class="case-lookup-form"
                  >
                    <div
                      v-for="(input, index) in data.inputs"
                      :key="index"
                      class="caseid-input-container"
                    >
                      <div
                        :class="{ 'is-error': !formValid }"
                        class="form-textbox case-id-input"
                      >
                        <input
                          v-model.trim="userName"
                          data-testid="case-id"
                          type="text"
                          maxlength="30"
                          :class="{ 'form-textbox-entered': userName }"
                          class="form-textbox-input"
                          id="case-id"
                        /><label
                          for="case-id"
                          class="form-textbox-label"
                          id="case-id_label"
                          >{{ input.placeholder }}</label
                        >
                        <div
                          v-if="!formValid"
                          class="form-message-wrapper form-error-inline-message"
                          id="case-id_error"
                        >
                          <component
                            v-if="input.validation.icon"
                            :is="input.validation.icon"
                            class="form-message-icon"
                          />
                          <span
                            :class="{ 'form-error-inline-message': !formValid }"
                            class="form-message"
                            ><p>{{ input.validation.errorMessage }}</p></span
                          >
                        </div>
                      </div>
                    </div>
                    <button
                      v-for="(button, index) in data.buttons"
                      :key="index"
                      type="submit"
                      class="button button-super case-lookup-submit"
                      :disabled="!formValid"
                    >
                      {{ button.label }}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="rc-overlay-close" @click="toggleModal()">
          <span class="rc-overlay-closesvg"
            ><svg
              width="21"
              height="21"
              class="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny"
            >
              <path fill="none" d="M0 0h21v21H0z"></path>
              <path
                d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"
              ></path></svg
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DialogModal.ts"></script>
<style scoped src="./DialogModal.css"></style>
