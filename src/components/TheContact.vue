<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <img class="absolute top-0 left-0" src="/assets/images/contact/light-left-blue.png" alt="">
    <img class="absolute bottom-0 right-0 -mb-20" src="/assets/images/contact/light-orange-right.png" alt="">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl text-center mx-auto mb-20">
          <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">READY TO SUPPORT US</span>
          <h1 class="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
            <span>Let’s stay</span>
            <span class="font-serif italic">connected</span>
          </h1>
          <p class="text-xl text-gray-500 font-semibold">We help people to grow their business using saturn ui library with professional and powerfull solution.</p>
        </div>
        <div class="xs:max-w-sm lg:max-w-none mx-auto">
          <div class="flex flex-wrap items-center -mx-4 mb-18">
            <div class="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div class="flex items-center lg:justify-center">
                <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200">
                  <img src="/assets/images/contact/icon-phone.svg" alt="">
                </div>
                <div>
                  <span class="text-lg text-gray-500">Phone</span>
                  <span class="block text-lg font-semibold text-gray-900">+1 891 4937</span>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div class="flex items-center lg:justify-center">
                <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
                  <img src="/assets/images/contact/icon-email.svg" alt="">
                </div>
                <div>
                  <span class="text-lg text-gray-500">Email</span>
                  <span class="block text-lg font-semibold text-gray-900">hello@yourdomain.com</span>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <div class="flex items-center lg:justify-center">
                <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-200">
                  <img class="h-8" src="/assets/images/contact/icon-location.svg" alt="">
                </div>
                <div>
                  <span class="text-lg text-gray-500">Office</span>
                  <span class="block text-lg font-semibold text-gray-900">213, New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-4xl overflow-hidden">
          <iframe 
            class="w-full" 
            id="gmap_canvas" 
            style="height: 601px;" 
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            frameborder="0">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>
