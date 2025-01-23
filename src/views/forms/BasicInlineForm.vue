<template>
  <div class="col-span-1 bg-white p-8 rounded-2xl flex justify-center mx-2 w-1/2">
        <Vueform
            size="lg"
            :display-errors="false"
            class="max-w-md mx-auto"
        >
          <!-- Title and Divider -->
          <StaticElement
              name="register_title"
              content="Basic Inline Form"
              tag="h1"
          />
          <StaticElement
              name="divider"
              tag="hr"
          />

          <!-- Personal Information -->
          <GroupElement
              name="container"
              description="Make sure it matches your legal name"
          >
            <TextElement
                name="first_name"
                placeholder="First name"
                :columns="{ container: 6, label: 12, wrapper: 12 }"
                field-name="First name"
                :rules="['required', 'max:255']"
            />
            <TextElement
                name="last_name"
                placeholder="Last name"
                :columns="{ container: 6, label: 12, wrapper: 12 }"
                field-name="Last name"
                :rules="['required', 'max:255']"
            />
          </GroupElement>

          <!-- Date of Birth -->
          <DateElement
              name="birthday"
              placeholder="Birthday"
              field-name="Birthday"
              :rules="['required']"
              description="Your birthday is not visible others."
              display-format="MMMM Do, YYYY"
          />

          <!-- Country Select -->
          <SelectElement
              name="country"
              :search="true"
              :native="false"
              input-type="search"
              autocomplete="disabled"
              placeholder="Country"
              :items="countries"
          />

          <!-- State Select -->
        <!--TODO: update this to return state depend on country-->
          <SelectElement
              name="state"
              :search="true"
              :native="false"
              input-type="search"
              autocomplete="disabled"
              placeholder="State"
              :items="countries"
          />

          <!-- Contact Information -->
          <TextElement
              name="phone"
              input-type="tel"
              placeholder="Phone"
              :rules="['required']"
              field-name="Phone"
          />
          <TextElement
              name="email"
              input-type="email"
              :rules="['required', 'max:255', 'email']"
              placeholder="Email"
              field-name="Email"
              description="You will receive a confirmation letter to this email."
          />

          <!-- Password and Confirmation -->
          <TextElement
              name="password"
              input-type="password"
              :rules="['required', 'min:8', 'same:password_confirmation']"
              field-name="Password"
              placeholder="Password"
          />
          <TextElement
              name="password_confirmation"
              input-type="password"
              :rules="['required']"
              field-name="Password confirmation"
              placeholder="Password again"
          />

          <!-- Consent and Submission -->
          <CheckboxElement
              name="terms"
              text="I accept the Terms & Conditions & Privacy Policy"
          />
          <CheckboxElement
              name="marketing_emails"
              text="I want to recieve marketing emails"
          />
          <StaticElement
              name="divider_1"
              tag="hr"
          />
          <ButtonElement
              name="register"
              :submits="true"
              button-label="submit"
              :full="true"
              size="lg"
          />
        </Vueform>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'BasicInlineForm',
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
    const countries = ref([]);
    const states = ref([]);

    onMounted(async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        countries.value = data.map(country => ({
          value: country.cca2, // Assuming you want to use the country's alpha-2 code as the value
          label: country.name.common // Using the common name as the label
        }));
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    });

    return {
      countries,
      states,
    };
  },
}
</script>
