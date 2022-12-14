export enum AppRoute {
  Main = '/',
  Login = 'logowanie',
  Register = 'rejestracja',
  Orders = 'zamowienia',
  OrdersUserList = 'moje',
  OrderAdd = 'dodaj',
  OrderEdit = 'edytuj',
  OrderDetails = 'szczegoly',
  OrderId = ':orderId',
  PasswordRecovery = 'resetowanie-hasla',
  PasswordRecoveryTokenId = ':tokenId',
  UserProfile = 'konto',
  UserId = ':userId',
  UserVerification = 'weryfikacja',
}

export enum AppLinks {
  Login = '/logowanie',
  Register = '/rejestracja',
  Orders = '/zamowienia',
  OrdersUserList = '/zamowienia/moje',
  OrderEdit = '/zamowienia/edytuj/:orderId',
  OrderDetails = '/zamowienia/szczegoly/:orderId',
  OrderAdd = '/zamowienia/dodaj',
  PasswordRecovery = '/resetowanie-hasla',
  UserProfile = '/konto',
  UserVerification = '/weryfikacja',
}
