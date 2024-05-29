import Layout from "@/components/layout";
import { Card } from "@/components/components";
import Reset from "./resetpass";
import Information from "./editInformation";
import Avatar from "./avatar";

function Page() {
    function updateInformation(e) {
        e.preventDefault();
        console.log("updateInformation");
    }
    return (
        <>
            <Layout>
                <div className="grid gap-3 md:lg:grid-cols-3">
                    <div className="md:lg:col-span-2 ">
                        <div className="grid gap-3">
                            <Card>
                                <Information />
                            </Card>
                            <Card>
                                <Reset />
                            </Card>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <Avatar />
                        </Card>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Page;
