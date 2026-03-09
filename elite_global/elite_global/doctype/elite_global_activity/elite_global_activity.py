import frappe
from frappe.model.document import Document
from frappe.utils import slug


class EliteGlobalActivity(Document):
	def before_save(self):
		if not self.slug:
			self.slug = slug(self.title)
