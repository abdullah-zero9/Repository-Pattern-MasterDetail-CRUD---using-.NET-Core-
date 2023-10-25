using OpusMasterDetailCrud.Models;
using OpusMasterDetailCrud.Models.ViewModel;

namespace OpusMasterDetailCrud.Repository
{
    public interface ISaleRepo
    {


        IEnumerable<SalesMaster> GetAll();
        SaleViewModel Add();
        void AddSale(SaleViewModel sale);
        SaleViewModel Update(int id);
        void UpdateSale(SaleViewModel cus);
        void Delete(int? id);
    }
        
}
