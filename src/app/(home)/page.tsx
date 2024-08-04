import Image from "next/image";
import { Form } from "./ui/Form";
import { ImageDerecha } from "./ui/Image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/new")
  return (
    <>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <ImageDerecha />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Invitacion</h1>
                <p>Te invito a mi fiesta de cumpleanos</p>
              </div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
