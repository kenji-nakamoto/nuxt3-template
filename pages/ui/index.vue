<template>
  <div class="w-[382px] h-[462px] relative shadow">
    <div class="w-[382px] h-[462px] left-0 top-0 absolute bg-white rounded"></div>
    <img
      class="w-[382px] h-[233.76px] left-0 top-0 absolute rounded-tl rounded-tr"
      src="https://via.placeholder.com/382x234"
    />
    <div
      class="h-[139px] left-[24px] top-[250px] absolute flex-col justify-start items-start gap-2 inline-flex"
    >
      <div class="text-zinc-800 text-xl font-medium leading-[30px]">The Coldest Sunset</div>
      <div class="w-[336px] h-[107px] text-zinc-700 text-base font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
        <br />
        Maiores et perferendis eaque, exercitationem praesentium nihil.
      </div>
    </div>
    <div class="left-[24px] top-[418px] absolute justify-start items-center gap-[11px] inline-flex">
      <div class="justify-start items-center gap-2.5 flex">
        <div class="px-4 py-[5px] bg-zinc-100 rounded-[999px] justify-start items-center flex">
          <div class="text-center text-zinc-700 text-xs font-bold leading-[18px]">#photography</div>
        </div>
      </div>
      <div class="justify-start items-center gap-2.5 flex">
        <div class="px-4 py-[5px] bg-zinc-100 rounded-[999px] justify-start items-center flex">
          <div class="text-center text-zinc-700 text-xs font-bold leading-[18px]">#travel</div>
        </div>
      </div>
      <div class="justify-start items-center gap-2.5 flex">
        <div class="px-4 py-[5px] bg-zinc-100 rounded-[999px] justify-start items-center flex">
          <div class="text-center text-zinc-700 text-xs font-bold leading-[18px]">#winter</div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6">
    <div class="w-80 h-[284px] relative bg-white rounded">
      <div
        class="left-[32px] top-[22px] absolute text-center text-zinc-800 text-sm font-bold leading-[21px]"
      >
        Username
      </div>
      <div
        class="left-[32px] top-[103px] absolute text-center text-zinc-800 text-sm font-bold leading-[21px]"
      >
        Password
      </div>
      <div
        class="left-[162px] top-[221px] absolute text-center text-blue-500 text-sm font-bold leading-[21px]"
      >
        Forgot Password?
      </div>
      <div class="left-[32px] top-[178px] absolute text-red-500 text-xs font-light">
        Please choose a password
      </div>
      <div class="w-64 h-10 left-[32px] top-[49px] absolute">
        <div class="w-64 h-10 left-0 top-0 absolute bg-white rounded border border-zinc-300">
          <div class="w-[276px] h-[19px] left-[12px] top-[10px] absolute">
            <div
              class="w-[276px] left-0 top-[-2px] absolute text-zinc-500 text-base font-normal leading-normal"
            >
              Username
            </div>
          </div>
        </div>
      </div>
      <div class="w-64 h-10 left-[32px] top-[130px] absolute">
        <div class="w-64 h-10 left-0 top-0 absolute bg-white rounded border border-red-500">
          <div class="w-[276px] h-[19px] left-[-32px] top-[10px] absolute"></div>
          <div class="w-[276px] h-[19px] left-[12px] top-[10px] absolute">
            <div
              class="w-[276px] left-0 top-[-2px] absolute text-zinc-500 text-base font-normal leading-normal"
            >
              Password
            </div>
          </div>
        </div>
      </div>
      <div class="left-[32px] top-[212px] absolute justify-start items-center gap-2.5 inline-flex">
        <div class="px-4 py-2 bg-blue-500 rounded justify-start items-center flex">
          <div class="text-center text-white text-base font-medium leading-normal">Sign In</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-center p-4">
      <button
        id="button"
        data-modal-toggle="modal"
        data-modal-target="modal"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Show modal
      </button>
    </div>

    <div
      id="modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              Terms of Service
            </h3>
            <button
              id="closeButton"
              data-modal-hide="modal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy
              laws for its citizens, companies around the world are updating their terms of service
              agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
              May 25 and is meant to ensure a common set of data rights in the European Union. It
              requires organizations to notify users as soon as possible of high-risk data breaches
              that could personally affect them.
            </p>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6">
    <UtilsUtilButton custom-class="text-white bg-blue-700 hover:bg-blue-800" label="トースト" />
  </div>
</template>

<script lang="ts" setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
