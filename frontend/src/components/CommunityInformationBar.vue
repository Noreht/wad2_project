<template>
  <div
    >
    <div class="min-w-0 flex-1">
      <div
        class="w-full h-[250px] rounded-2xl"
        :style="{
          backgroundImage: `url(ImpactCards/Community.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }"
      ></div>
      <h2
        class="mt-3 text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight min-h-[50px]"
      >
      Punggol Community Warriors!
      </h2>
      <div
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <BriefcaseIcon
            class="mr-3 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          50 Full-time volunteers
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <MapPinIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Remote help allowed
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500 font-semibold">
          <CurrencyDollarIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Aug 2017 &ndash; Present
        </div>
      </div>
    </div>
  </div>
</template>
