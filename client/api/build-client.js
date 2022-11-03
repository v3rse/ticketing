import axios from 'axios';

export default function buildClient({ req }) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
}
