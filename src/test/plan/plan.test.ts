import {getPlan} from "../../main/graphql/plan/service"


test('if can get professional description', async () => {
    const result = await getPlan("https://www.smartmei.com.br")
    expect( result.description).toBe('Transferência');
});