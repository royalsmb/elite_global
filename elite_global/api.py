import frappe
from frappe.utils import validate_email_address


@frappe.whitelist(allow_guest=True)
def get_activities():
	"""Return published activities for the website."""
	activities = frappe.get_all(
		"Elite Global Activity",
		filters={"published": 1},
		fields=[
			"name",
			"title",
			"slug",
			"category",
			"date",
			"summary",
			"description",
			"image_1",
			"image_2",
			"tags",
		],
		order_by="date desc",
	)

	for activity in activities:
		activity["tags"] = [
			t.strip() for t in (activity.get("tags") or "").split(",") if t.strip()
		]

	return activities


@frappe.whitelist(allow_guest=True)
def get_testimonials():
	"""Return published testimonials for the website."""
	return frappe.get_all(
		"Elite Global Testimonial",
		filters={"published": 1},
		fields=[
			"full_name",
			"designation",
			"organization",
			"rating",
			"testimonial",
			"image",
		],
		order_by="display_order asc",
	)


@frappe.whitelist(allow_guest=True)
def submit_testimonial(full_name, testimonial, rating="5", email=None, phone=None, designation=None, organization=None):
	"""Submit a testimonial from the public web form. Saved as unpublished for admin review."""
	if not full_name or not testimonial:
		frappe.throw("Name and testimonial are required.")

	if email and not validate_email_address(email):
		frappe.throw("Please provide a valid email address.")

	rating = str(rating) if str(rating) in ("1", "2", "3", "4", "5") else "5"

	doc = frappe.get_doc({
		"doctype": "Elite Global Testimonial",
		"full_name": frappe.utils.escape_html(full_name.strip()),
		"email": (email or "").strip(),
		"phone": (phone or "").strip(),
		"designation": frappe.utils.escape_html((designation or "").strip()),
		"organization": frappe.utils.escape_html((organization or "").strip()),
		"rating": rating,
		"testimonial": frappe.utils.escape_html(testimonial.strip()),
		"published": 1,
		"source": "Web Form",
	})
	doc.insert(ignore_permissions=True)
	frappe.db.commit()

	return {"success": True}
