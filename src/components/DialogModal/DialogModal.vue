<template>
  <div id="portal">
    <div
      class="rc-overlay rc-overlay-popup rc-overlay-fixed-width r-fade-transition-enter-done"
    >
      <div>
        <div class="rc-overlay-popup-outer">
          <div class="rc-overlay-popup-content">
            <div class="rc-overlay-loader-content">
              <div class="dd-modal">
                <h2
                  class="t-headline-reduced"
                  id="7b7d9c10-3734-11ed-9db5-2f37eebfb407"
                >
                  Congratulations! You won!
                </h2>
                <div class="t-body">
                  <div class="col-md-6">
                    <div class="margin-bottom-4">
                      <p>Total Score: {{ score }}</p>
                      <input
                        v-if="rerender"
                        ref="input"
                        label="Username"
                        type="text"
                        placeholder="Enter Username..."
                        maxlength="30"
                        :valid="userNameValid"
                        :changeCallback.prop="setUserName"
                        :hitEnterCallback.prop="addResults"
                        :validation-message="
                          userNameValid === undefined || userNameValid === true
                            ? undefined
                            : 'Please enter a valid username'
                        "
                      />
                    </div>
                    <button
                      label="Submit"
                      type="submit"
                      :disabled="!userNameValid"
                      @click="addResults()"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="rc-overlay-close">
          <span class="rc-overlay-closesvg">
            <svg
              width="21"
              height="21"
              class="as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny"
            >
              <path fill="none" d="M0 0h21v21H0z"></path>
              <path
                d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DialogModal.ts"></script>
<style src="./DialogModal.css"></style>
