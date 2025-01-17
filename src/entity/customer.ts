class Customer {
      _id: string
      _name: string
      _address: string

      constructor(id: string, name: string, address: string) {
            this._id = id
            this._name = name
            this._address = address
      }

      get id() {
            return this._id
      }

      get name() {
            return this._name
      }

      get address() {
            return this._address
      }

      setName(name: string) {
            this._name = name
      }

      setAddress(address: string) {
            this._address = address
      }
      
}