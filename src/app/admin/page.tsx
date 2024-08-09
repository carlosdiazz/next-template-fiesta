export const revalidate = 0;
import { auth } from "@/auth";
import { Table } from "./ui/Table";
import { redirect } from "next/navigation";

export default async function NamePage() {

  const session = await auth();

  if (!session?.user) {
    redirect("/auth");
  }



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
          style={{ maxWidth: 1700 }}
        >
          <div >
            <Table/>
          </div>
        </div>
      </div>
    </>
  );
}
