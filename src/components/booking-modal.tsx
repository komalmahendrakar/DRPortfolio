
"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM"
];

export const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    concern: '',
    consultationType: 'in-person',
    date: undefined as Date | undefined,
    time: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.time) newErrors.time = "Please select a time slot";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    
    toast({
      title: "Success!",
      description: "Your appointment request has been submitted.",
    });
  };

  const resetModal = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      age: '',
      concern: '',
      consultationType: 'in-person',
      date: undefined,
      time: ''
    });
    setErrors({});
    onOpenChange(false);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={resetModal}>
        <DialogContent className="sm:max-w-[425px] text-center p-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-headline">Request Submitted!</DialogTitle>
            <DialogDescription className="text-lg">
              Thank you, {formData.name.split(' ')[0]}. Your appointment request for {formData.date ? format(formData.date, 'PPP') : ''} at {formData.time} has been received. Our team will contact you shortly to confirm.
            </DialogDescription>
            <Button onClick={resetModal} className="w-full mt-4">Close Window</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-primary">Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill in your details below to request a consultation with Dr. Poornesh Gowda.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name} 
                onChange={handleInputChange}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder="9876543210" 
                maxLength={10}
                value={formData.phone} 
                onChange={handleInputChange}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email ID *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email} 
                onChange={handleInputChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age (Optional)</Label>
              <Input 
                id="age" 
                name="age" 
                type="number" 
                placeholder="25" 
                value={formData.age} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Consultation Type</Label>
            <RadioGroup 
              defaultValue="in-person" 
              className="flex space-x-4"
              onValueChange={(val) => setFormData(prev => ({...prev, consultationType: val}))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in-person" id="in-person" />
                <Label htmlFor="in-person" className="font-normal">In-Person</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="video" id="video" />
                <Label htmlFor="video" className="font-normal">Video Consultation</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground",
                      errors.date && "border-destructive"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => {
                      setFormData(prev => ({...prev, date}));
                      if (errors.date) setErrors(prev => {
                        const next = {...prev};
                        delete next.date;
                        return next;
                      });
                    }}
                    disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-xs text-destructive">{errors.date}</p>}
            </div>
            <div className="space-y-2">
              <Label>Preferred Time Slot *</Label>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1 border rounded-md">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    type="button"
                    variant={formData.time === slot ? "default" : "outline"}
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      setFormData(prev => ({...prev, time: slot}));
                      if (errors.time) setErrors(prev => {
                        const next = {...prev};
                        delete next.time;
                        return next;
                      });
                    }}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="concern">Concern / Symptoms</Label>
            <Textarea 
              id="concern" 
              name="concern" 
              placeholder="Briefly describe your health concern..." 
              value={formData.concern} 
              onChange={handleInputChange}
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button 
              type="submit" 
              className="w-full md:w-auto min-w-[200px]" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Requesting...
                </>
              ) : "Request Consultation"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
