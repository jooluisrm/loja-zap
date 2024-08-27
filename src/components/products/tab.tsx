import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductsTab = () => {
    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex">
                <TabsTrigger value="tab1" className="flex-1">
                    Tab 1
                </TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1">
                    Tab 2
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
                Conteudo da TAB 1
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                Conteudo da TAB 2
            </TabsContent>
        </Tabs>
    );
}