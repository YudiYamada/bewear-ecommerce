import Image from "next/image";

import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <>
      <Header />
      {/*mobile*/}
      <div className="flex w-full flex-col gap-6 p-5 md:hidden">
        <Tabs defaultValue="sign-in">
          <TabsList>
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="w-full">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up" className="w-full">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>

      {/*desktop*/}
      <div className="mx-auto mt-6 hidden max-w-[1440px] items-center justify-center md:flex">
        <div>
          <Image
            src="/banner.jpg"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="w-[500px] rounded-2xl"
          />
        </div>
        <div className="flex w-[500px] flex-col gap-6 p-5">
          <Tabs defaultValue="sign-in">
            <TabsList>
              <TabsTrigger value="sign-in">Entrar</TabsTrigger>
              <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="sign-in" className="w-full">
              <SignInForm />
            </TabsContent>
            <TabsContent value="sign-up" className="w-full">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Authentication;
