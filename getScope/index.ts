import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getDefinedScope } from "../helpers/getDefinedScope";
import { churchHierarchy } from "../hierarchy";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const {scope, regionId, nationId, areaId, districtId, assemblyId} = req.query;

    const definedScope = getDefinedScope(churchHierarchy, scope, regionId, nationId, areaId, districtId, assemblyId);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: definedScope
    };
   
    // context.res = {
    //     status: 400,
    //     body: "Please pass a the appropriate query strings."
    // };
};

export default httpTrigger;
