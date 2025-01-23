<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
    <Vueform class="max-w-md mx-auto">
        <template #empty>
          <!-- Title and Divider -->
          <StaticElement
              name="register_title"
              content="Steps Form"
              tag="h1"
          />
          <StaticElement
              name="divider"
              tag="hr"
          />
          <FormSteps>
            <FormStep
                name="account"
                :elements="['email', 'password']"
            >
              Account
            </FormStep>
            <FormStep
                name="personal"
                :elements="['name', 'bio']"
            >
              Personal
            </FormStep>
            <FormStep
                name="social"
                :elements="['facebook', 'twitter']"
            >
              Social
            </FormStep>
          </FormSteps>

          <FormElements>
            <TextElement
                name="email"
                label="Email"
            />
            <TextElement
                input-type="password"
                name="password"
                label="Password"
            />
            <TextElement
                name="name"
                label="Name"
            />
            <TextareaElement
                name="bio"
                label="bio"
            />
            <TextElement
                name="facebook"
                label="Facebook"
            />
            <TextElement
                name="twitter"
                label="Twitter"
            />
          </FormElements>

          <FormStepsControls />
        </template>
      </Vueform>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "StepsForm",
  props: {
    formTitle: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    },
    displayErrors: {
      type: Boolean,
      default: true
    },
  },
  setup(props, context) {
    const currentStep = ref(0); // Start at the first step
    const steps = ['account', 'personal', 'social']; // Define the steps

    // Method to go to the next step
    const nextStep = () => {
      if (currentStep.value < steps.length - 1) {
        currentStep.value++;
      }
    };

    // Method to go to the previous step
    const previousStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--;
      }
    };

    // Expose the necessary data and methods to the template
    return {
      currentStep,
      steps,
      nextStep,
      previousStep,
    };
  },
};
</script>
