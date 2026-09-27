const Welcome = () => {
    return(
        <>
        <div className="lg:w-[42%] bg-[#064c3d] text-white p-8 sm:p-10 lg:p-12 relative">

          {/* Logo */}
          <div className="text-2xl font-bold">
            🌿 TamilX<span className="text-[#59b89d]"></span>
          </div>

          <p className="text-xs text-white/60 mt-1">
            Your Goals. Our Support.
          </p>


          {/* Welcome Text */}
          <div className="mt-10">

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Welcome
              <br />
              Back!
            </h1>

            <p className="text-lg text-white/70 mt-6 leading-8">
              Log in to access your
              <br />
              personal dashboard.
            </p>

          </div>


          {/* Features */}
          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                📅
              </div>

              <span className="text-white/80">
                Plan your day
              </span>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                📊
              </div>

              <span className="text-white/80">
                Track progress
              </span>
            </div>


            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                🎯
              </div>

              <span className="text-white/80">
                Reach your goals
              </span>
            </div>

          </div>


          {/* Decorative Leaves */}
          <div className="absolute bottom-5 left-5 text-7xl opacity-30">
            🌿
          </div>

        </div>
        
        </>
    )
}

export default Welcome;