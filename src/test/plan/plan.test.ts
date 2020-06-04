import {getPlan} from "../../main/plan/service"
import axios from 'axios';

//jest.mock('axios');

test('if can get professional description', async () => {
    const result = await getPlan("https://www.smartmei.com.br")
    expect( result.description).toBe('Transferência');
});