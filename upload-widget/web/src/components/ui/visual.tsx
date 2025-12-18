import { UploadWidget } from "../upload-widget";

export function Visual() {


return (

<div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_60%,#008080,transparent_60%)] w-[980px] h-[980px]">
<div className="flex flex-col rounded-lg bg-[radial-gradient(circle_at_50%_50%,#243c5a,transparent_80%)] items-center justify-center p-10 ">
  <h1 className="text-white text-2xl flex flex-col items-center justify-center font-bold max-w-[600px]">Faça upload das suas imagens e compacte-as em um único arquivo menor.
  </h1>
</div>
<div className="flex flex-col items-center justify-center p-10"><p className="text-white text-xl font-semibold p-2">Clique abaixo para fazer upload</p>
<div className="flex flex-col">
  <UploadWidget />
</div>
</div>
  </div>
)
}