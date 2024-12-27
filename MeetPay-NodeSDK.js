// Import dependencies
import axios from 'axios';  // For making HTTP requests
import qs from 'qs';        // For formatting data as x-www-form-urlencoded

class MeetPaySDK {
  constructor(apiKey, secretKey, baseUrl = 'https://api.meetpay.africa') {
    if (!apiKey || !secretKey) {
      throw new Error('API key and Secret key are required to use MeetPaySDK.');
    }
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Initiates a payment with MeetPay using mockup data.
   * 
   * @returns {Promise<Object>} Response from MeetPay API.
   */
  async initiatePayment() {
    const url = `${this.baseUrl}/api/payments`;

    // Mockup data for the payment request
    const mockupData = {
      buyer_name: 'William',
      buyer_phone: '0689726060',
      buyer_email: 'william@zeno.co.tz',
      amount: 1000,
      account_id: 'zp82240',
      webhook_url: 'https://example.com/webhook',
      api_key: this.apiKey,
      secret_key: this.secretKey,
    };

    // Format the data as x-www-form-urlencoded
    const formattedData = qs.stringify(mockupData);

    try {
      // Send the POST request
      const response = await axios.post(url, formattedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.data;
    } catch (error) {
      // Handle API or network errors
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }
  }
}

export default MeetPaySDK;