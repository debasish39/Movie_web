export default function Loading(){

  return(

    <div className="flex flex-col justify-center items-center h-screen bg-black ">

      <video
        src="/Loading.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-40 h-40"
      />

     

    </div>

  )

}