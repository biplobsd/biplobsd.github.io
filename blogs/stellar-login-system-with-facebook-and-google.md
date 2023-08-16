<center>
  <img src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/d2fa6523-78af-42f5-843a-c6318aafbaa1" alt="stellar-login-system-light" />
</center>

# Stellar Login System with Facebook and Google

We have seen login systems using Google and Facebook accounts on many websites. Our team has developed this login system for obtaining a public key to access our services.

## Basic usages
To use our login system, you need to visit the following websites: map.action-tokens.com, collections.action-tokens.com, gallery.action-tokens.com. These websites have implemented this system. New users can simply choose to log in to the site using either their Facebook or Google accounts.

<center>
  <img src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/c83844b3-2d91-4175-8c8f-5b0897e5032c" alt="Gallery login" />
</center>

## How Does This Login Work?
When a user visits any of the mentioned sites and clicks the 'Connect Wallet' button, a dialog will appear. In this dialog, the user can select their preferred wallet service to connect with the site.

## Connecting with Google and Facebook
If the user chooses Google or Facebook, another dialog will show up. Now the user needs to select an account to continue the login. This authentication system is powered by Firebase authentication. After selecting an account, the public key is retrieved from our other Firebase project located at accounts.action-tokens.com.

From the Accounts project, we obtain the public key. For new users logging in for the first time, their Stellar account is automatically created. For subsequent logins, only their public key is retrieved.

## Conclusion
The Stellar Login System with Facebook and Google integration represents an evolution in user authentication and access provision. By combining the convenience of widely-used account logins with the security and efficiency of blockchain technology, we are proud to offer a seamless experience for our users.

## Reference
1. https://firebase.google.com/docs/auth
2. https://developers.stellar.org/docs/tutorials/create-account#create-a-keypair
