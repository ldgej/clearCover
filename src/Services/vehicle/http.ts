import axios from 'axios';

const BASE_URL = 'https://api.clearcoverpartner.com/api/v2';
const BASE_AXIOS_CONFIG = {
  responseType: 'json' as const,
  baseURL: BASE_URL,
};

type CCAPI$ResponseType = Array<{
  value: string;
  label: string;
}>;

export const getYears = () =>
  axios
    .get<CCAPI$ResponseType>('/vehicles/years', BASE_AXIOS_CONFIG)
    .then(response => response.data)
    .catch(function(error) {
      // handle error
      console.log(error);
    });

export const getMakesByYear = (year: string) =>
  axios
    .get<CCAPI$ResponseType>('/vehicles/makes', {
      params: { year },
      ...BASE_AXIOS_CONFIG,
    })
    .then(response => response.data)
    .catch(function(error) {
      // handle error
      console.log(error);
    });

export const getModelsByMakeYear = (year: string, make: string) =>
  axios
    .get<CCAPI$ResponseType>('/vehicles/models', {
      params: { year, make },
      ...BASE_AXIOS_CONFIG,
    })
    .then(response => response.data)
    .catch(function(error) {
      // handle error
      console.log(error);
    });

export const getBodyStylesByModelYearMake = (
  year: string,
  make: string,
  model: string
) =>
  axios
    .get<CCAPI$ResponseType>('/vehicles/body_styles', {
      params: { year, make, model },
      ...BASE_AXIOS_CONFIG,
    })
    .then(response =>
      response.data.map(({ label, value }) => ({ label, value }))
    )
    .catch(function(error) {
      // handle error
      console.log(error);
    });

type CCAPI$VehicleResponseType = {
  id: string;
  year: string;
  make: string;
  model: string;
  body_style: string;
  partial_vin: string;
  vehicle_services_id: string;
};

export const getVehicle = (
  year: string,
  make: string,
  model: string,
  bodyStyle: string
) =>
  axios
    .get<CCAPI$VehicleResponseType>('/vehicles', {
      params: { year, make, model, body_style: bodyStyle },
      ...BASE_AXIOS_CONFIG,
    })
    .then(response => response.data)
    .catch(function(error) {
      // handle error
      console.log(error);
    });
