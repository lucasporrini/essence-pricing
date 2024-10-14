import { Maps } from "@/components/global/maps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = async () => {
  return (
    <div className="p-2">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="near">Near me</TabsTrigger>
          <TabsTrigger value="city">Search my city</TabsTrigger>
        </TabsList>
        <TabsContent value="near">
          <Maps />
        </TabsContent>
        <TabsContent value="city">Case 2</TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
