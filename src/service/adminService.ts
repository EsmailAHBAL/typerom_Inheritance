import { keyboard } from './../entity/inheritance/Keyboard';
import { User } from './../entity/User';
import { Admin } from './../entity/Admin';
import { AppDataSource } from './../data-source';
import { Screen } from '../entity/inheritance/Screen';
import { Printer } from '../entity/inheritance/Printer';
class adminService {

     adminRepository=AppDataSource.getRepository(Admin)
     userRepository=AppDataSource.getRepository(User)
     screenRepository=AppDataSource.getRepository(Screen)
     keyboardRepository=AppDataSource.getRepository(keyboard)
     printerRepository=AppDataSource.getRepository(Printer)
     
     async addAdmin()
     {  
         const admin = new Admin()
         admin.email="adminOne@new.fr"
         admin.name="adminOne"
         admin.password="adminOnePassword"
         this.adminRepository.save(admin)

         const user = new User()
         user.email="user1@gmail.com"
         user.name="user191"

         this.userRepository.save(user)


         const screen = new Screen()
         screen.count=233
         screen.taille=12

         this.screenRepository.save(screen)


         const printer = new Printer()
         printer.count=22
         printer.type_p="HH76"

         this.printerRepository.save(printer)
   
       const keyboardOne = new keyboard()
       keyboardOne.count=22992
       keyboardOne.type="II98"

       this.keyboardRepository.save(keyboardOne)
        }
        async getScreens()
        {
            return this.screenRepository.manager.find(Screen)
        }
        async getScreenById(num:number)
        {
            return this.screenRepository.findBy({num_device:num})
        }
        async updateScreen(id:number)
        {
       

            const tuUpdate= await this.screenRepository.findOneBy({num_device:id})
           tuUpdate.count=0
           tuUpdate.taille=0
            return this.screenRepository.save(tuUpdate)

        }
}

export default new adminService()