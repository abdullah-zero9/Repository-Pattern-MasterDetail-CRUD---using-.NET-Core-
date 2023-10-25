using Microsoft.AspNetCore.Mvc;
using OpusMasterDetailCrud.Models.ViewModel;
using OpusMasterDetailCrud.Repository;

namespace OpusMasterDetailCrud.Controllers
{
    public class SaleController : Controller
    {
        private readonly ISaleRepo _saleRepo;

        public SaleController(ISaleRepo saleRepo)
        {
            _saleRepo = saleRepo;
        }

        public IActionResult Index()
        {
            var s = _saleRepo.GetAll();
            return View(s);
        }


        public IActionResult Create()
        {
            SaleViewModel d = _saleRepo.Add();
            return View(d);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(SaleViewModel cus)
        {

            _saleRepo.AddSale(cus);
            return RedirectToAction("Index");

        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            SaleViewModel d = _saleRepo.Update(id);
            return View("Edit", d);
        }
        [HttpPost]
        public IActionResult Edit(SaleViewModel cus)
        {
            _saleRepo.UpdateSale(cus);
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            _saleRepo.Delete(id);
            return RedirectToAction("Index");
        }


    }
}
