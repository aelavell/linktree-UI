import axios from "axios";

async function getNode(url, taskId) {
    try {
        const res = await axios.get(`${url}/nodes/${taskId}`);
        console.log('RESPOSNE FROM GET NODES', res.data);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomObject = res.data[randomIndex];
        const selectnode = randomObject.data.url
        return selectnode;
      } catch (_e) {
        return [];
      }
}

export default getNode;