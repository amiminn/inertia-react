import Layout from "@/components/layout";
import { Card } from "@/components/components";
import Reset from "./resetpass";
import Information from "./editInformation";
import Avatar from "./avatar";
import AccessKey from "./accessKey";

function Page() {
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
                <div className="mt-3">
                    <AccessKey />
                </div>
            </Layout>
        </>
    );
}

export default Page;
